import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { v4 as uuidv4 } from 'uuid';

@Directive({
  selector: '[appFormControlValidationMsg]',
})
export class FormControlValidationMsgDirective implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef, private control: NgControl, private translate: TranslateService) {}

  @Input() validationMsgId: string = '';
  @Input() isMsgVisible: boolean = true;
  @Input() displayBlock: boolean = false;
  errorSpanId: string = '';

  statusChangeSubscription!: Subscription | undefined;

  ngOnInit(): void {
    this.errorSpanId = uuidv4();
    this.statusChangeSubscription = this.control.statusChanges?.subscribe((status) => {
      if (status == 'INVALID' && this.isMsgVisible) {
        this.showError();
      } else {
        this.removeError();
      }
    });
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription?.unsubscribe();
  }

  private showError() {
    this.removeError();
    const valErrors: ValidationErrors = this.control.errors || {};
    const [firstErrorKey] = Object.keys(valErrors);
    const errorMessageKey: string = this.constructErrorMessageKey(this.validationMsgId, firstErrorKey);
    const translation = this.getValidationMsg(errorMessageKey);
    const hasTranslation: boolean = translation !== errorMessageKey && translation !== '';

    const errorMsg: string = hasTranslation
      ? translation
      : this.getValidationMsg(this.constructErrorMessageKey('', firstErrorKey));

    const errSpan = this.displayBlock
      ? '<span class="form-item-error display-block" id="' + this.errorSpanId + '">' + errorMsg + '</span>'
      : '<span class="form-item-error" id="' + this.errorSpanId + '">' + errorMsg + '</span>';
    this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
  }
  private removeError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) errorElement.remove();
  }

  private getValidationMsg(validationId: string): string {
    const {
      max: { max = '' } = {},
      min: { min = '' } = {},
      maxlength: { requiredLength: maxLength = '' } = {},
      minlength: { requiredLength: minLength = '' } = {},
    } = this.control.errors || {};
    return this.translate.instant(validationId, { maxLength, minLength, max, min });
  }

  private constructErrorMessageKey = (id: string, key: string): string => {
    const formattedMsgId = id.concat(id ? '_' : '');
    return `INF_VALIDATION_FIELD_${formattedMsgId}${key.toLocaleUpperCase()}`;
  };
}

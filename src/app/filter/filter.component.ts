import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  person: Object;
  genres: Object;
  searchRes: Array<Object>;
  searchStr: string;
  option:string;

  
  constructor(private _moviesService: MoviesService, private router: ActivatedRoute) { }

  ngOnInit() {
 
  }

  
  searchMovies() {
    this._moviesService.searchMovies(this.searchStr, this.option).subscribe(res => {
      this.searchRes = res.results;
    })
  }


}
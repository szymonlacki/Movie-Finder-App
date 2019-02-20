import { Component, OnInit,Input } from '@angular/core';
import {MoviesService} from '../movies.service';
import { GenresComponent } from '../genres/genres.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  movies: Array<Object>;

  genres: Array<Object>;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });
    this._moviesService.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
      
      
    });
  }

  ngOnInit() {
  }

 



 

  
}

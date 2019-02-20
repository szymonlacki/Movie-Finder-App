
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject, Subject, Observable } from 'rx';


@Injectable()
export class MoviesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';


  }


  private packageDataSource = new BehaviorSubject<any>(undefined);
  public _packageData: Observable<any> = this.packageDataSource.asObservable();



  getMoviesByYear(year: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=' + year + '&callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })

  }

  getMoviesByGenre(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/' + id + '/movies?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }
  getPopular() {
    var search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getInTheaters() {
    var search = new URLSearchParams();
    search.set('primary_release_date.gt', '2015-10-20');
    search.set('primary_release_date.lte', '2015-12-20');
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getTopRatedMovies(page: number) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=vote_average.desc&page=' + page, { search })
      .map(res => {
        return res.json();
      })
  }

  searchMovies(searchStr: string, option:string) {
    var search = new URLSearchParams();
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    // search.set('sort_by','vote_average.desc');
    return this._jsonp.get('https://api.themoviedb.org/3/search/'+option+'?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  searchActors(searchStr: string){
    var search = new URLSearchParams();
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    // search.set('sort_by','vote_average.desc');
    return this._jsonp.get('https://api.themoviedb.org/3/search/person?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })

  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'PL');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }
  discoverMovies(option: String, option2: String, option3: String, page:number) {
    var search = new URLSearchParams();
    search.set('language', 'PL');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?&primary_release_year=' + option + '&' + option2 +'&'+ 'with_genres=' + option3+'&page='+page+'&callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }


  getMovieReviews(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }
  getMovieVideos(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/videos?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getSimilarMovies(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/similar?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getMovieCredits(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/credits?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getUpComingMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }
  getPopularSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/popular?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getTopRatedSeries() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/top_rated?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getSerieDetails(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/' + id + '?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getSerieVideos(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/' + id + '/videos?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getPersonDetail(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/' + id + '?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getPersonCast(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/' + id + '/movie_credits?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }
}

import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { ActorComponent } from './actor/actor.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { JSONP_HOME } from '@angular/http/src/backends/browser_jsonp';
import { HomePageComponent } from './home-page/home-page.component';
import { FilterComponent } from './filter/filter.component';

export const appRoutes: Routes = [
    {path: 'movies', component: MoviesComponent},
    /* {path: 'login', component:LoginComponent}, */
    {path: 'homepage', component: HomePageComponent},
    {path: '', redirectTo:'/homepage', pathMatch: 'full'},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'tv/:id', component: SerieComponent},
    {path: 'actor/:id', component: ActorComponent},
    //{path: 'genres/:id/:name', component: GenresComponent},
    {path: 'popular/series', component: PopularSeriesComponent},
    {path: 'results', component: SearchResultComponent},
   /*  {path: '**', component: HomePageComponent}, */
    {path: 'search', component: SearchComponent},
    {path: 'filter', component: FilterComponent},
];
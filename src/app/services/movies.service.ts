import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey:string = '0346f17854ad21ce40bad4cab3049bcb';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }

  getPopular$() {

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp( url, 'JSONP_CALLBACK' ).pipe( map( (res: any) => res.results ));
  }
}

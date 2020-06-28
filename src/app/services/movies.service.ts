import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = '0346f17854ad21ce40bad4cab3049bcb';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }

  getPopular$() {
    const URL = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( URL, 'JSONP_CALLBACK' ).pipe( map( (res: any) => res.results ));
  }

  getMovie$(movieId: string) {
    const URL = `${ this.urlMoviedb }/movie/${ movieId}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( URL, 'JSONP_CALLBACK' ).pipe( map( (res: any) => res ));
  }

  searchMovie$(texto: string) {
    const URL = `${ this.urlMoviedb }/search/movie?query=${ texto }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( URL, 'JSONP_CALLBACK' ).pipe( map( (res: any) => res.results ));
  }
}

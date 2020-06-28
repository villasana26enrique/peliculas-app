import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public movies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  buscar( texto: string ) {
    this.moviesService.searchMovie$( texto ).subscribe( (data: any) => this.movies = data);
  }

}

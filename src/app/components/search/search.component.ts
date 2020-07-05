import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public busqueda: string = '';

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  buscar = () => {
    if (this.busqueda.length === 0) {
      return;
    }
    this.moviesService.searchMovie$( this.busqueda ).subscribe();
  }

}

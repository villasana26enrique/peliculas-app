import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public popular: any[] = [];

  constructor(private moviesService: MoviesService) {
    this.moviesService.getPopular$().subscribe( data => this.popular = data );
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public popular: any[] = [];

  constructor(private moviesService: MoviesService,
              private router: Router) {
    this.moviesService.getPopular$().subscribe( data => this.popular = data );
  }

  ngOnInit(): void {
  }

  getMovie(movie: any) {
    let movieId: string;
    movieId = movie.id;
    console.log(movieId);
    this.router.navigate([ '/movie', movieId ]);
  }

}

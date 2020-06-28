import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {
  @Input() movies: any[] = [];

  constructor(private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  getMovie( movie: any ) {
    let movieId: string;
    movieId = movie.id;
    console.log(movieId);
    this.router.navigate([ '/movie', movieId ]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  public id: string;
  public movie: any = {};
  public loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService) {

    this.activatedRoute.params.subscribe( (data: any) => this.getMovie(data.id) );
  }

  ngOnInit(): void {
  }

  getMovie = (id: string) => {
    this.moviesService.getMovie$( id ).subscribe( (data: any) => this.movie = data );
    this.loading = false;
  }
}

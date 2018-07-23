import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../service/movies.service'
import { Movie } from '../models/Movie'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']
      this.moviesService
        .getMovieById(id)
        .subscribe(movie => {
          this.movie = movie
        })
    })
  }
}

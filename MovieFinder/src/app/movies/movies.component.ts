import { Component, OnInit } from '@angular/core'
import {MoviesService} from '../service/movies.service'
import { Movie } from '../models/Movie'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public popular: Movie[]
  public inTheaters: Movie[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data.results
      })

    this.moviesService
      .getInTheaters()
      .subscribe(data => {
        this.inTheaters = data.results
      })
  }
}

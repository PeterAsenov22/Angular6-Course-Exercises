import { Component } from '@angular/core'
import { Movie } from '../models/Movie'
import { MoviesService } from '../service/movies.service'

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {
  public matched: Movie[]

  constructor (private moviesService: MoviesService) { }

  search (params) {
    this.moviesService
      .getMoviesByName(params.search)
      .subscribe(data => {
        this.matched = data.results
      })
  }
}

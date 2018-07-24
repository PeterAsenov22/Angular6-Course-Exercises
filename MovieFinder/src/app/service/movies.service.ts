import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/Movie'
import { Movies } from '../models/Movies'
import { Observable } from '../../../node_modules/rxjs'

@Injectable()
export class MoviesService {
  private apiKey: string = '78e67015eb71d80c25acda620e2fd2e1'
  private path: string = 'https://api.themoviedb.org/3/'
  private authentication: string = '&api_key='
  private movie: string = 'movie/'
  private movieAuth: string = '?api_key='
  private search: string = 'search/movie?query='
  private popular: string = 'discover/movie?sort_by=popularity.desc'
  private inTheaters: string = 'discover/movie?primary_release_date.gte=2018-06-01&primary_release_date.lte=2018-07-23'
  private forKids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
  private bestDramas: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'

  constructor(private http: HttpClient) { }

  getPopular (): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${this.apiKey}`)
  }

  getInTheaters (): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.inTheaters}${this.authentication}${this.apiKey}`)
  }

  getPopularForKids (): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.forKids}${this.authentication}${this.apiKey}`)
  }

  getBestDramas (): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.bestDramas}${this.authentication}${this.apiKey}`)
  }

  getMovieById (id): Observable<Movie> {
    return this.http.get<Movie>(`${this.path}${this.movie}${id}${this.movieAuth}${this.apiKey}`)
  }

  getMoviesByName (searchTerm) {
    return this.http.get<Movies>(`${this.path}${this.search}${searchTerm}${this.authentication}${this.apiKey}`)
  }
}

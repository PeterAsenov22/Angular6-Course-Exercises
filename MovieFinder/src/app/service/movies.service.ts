import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Movies } from '../models/Movies'
import { Observable } from '../../../node_modules/rxjs'

@Injectable()
export class MoviesService {
  private apiKey: string = '78e67015eb71d80c25acda620e2fd2e1'
  private path: string = 'https://api.themoviedb.org/3/'
  private authentication: string = '&api_key='
  private popular: string = 'discover/movie?sort_by=popularity.desc'
  private inTheaters: string = 'discover/movie?primary_release_date.gte=2018-06-01&primary_release_date.lte=2018-07-23'

  constructor(private http: HttpClient) { }

  getPopular (): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${this.apiKey}`)
  }

  getInTheaters (): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.inTheaters}${this.authentication}${this.apiKey}`)
  }
}

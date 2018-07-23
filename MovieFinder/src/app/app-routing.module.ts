import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MoviesComponent } from './movies/movies.component'
import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies/details/:id', component: MovieDetailsComponent },
  { path: 'about', component: JumbotronComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

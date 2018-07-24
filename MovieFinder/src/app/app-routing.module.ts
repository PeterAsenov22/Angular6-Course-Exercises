import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/details/:id', component: MovieDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

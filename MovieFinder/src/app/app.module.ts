import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { MoviesComponent } from './movies/movies.component'
import { NavbarComponent } from './navbar/navbar.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { MovieComponent } from './movie/movie.component'

import {MoviesService} from './service/movies.service'
import { MovieDetailsComponent } from './movie-details/movie-details.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    JumbotronComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

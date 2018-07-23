import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { MoviesComponent } from './movies/movies.component'
import { NavbarComponent } from './navbar/navbar.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { MovieComponent } from './movie/movie.component'

import {MoviesService} from './service/movies.service'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    JumbotronComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

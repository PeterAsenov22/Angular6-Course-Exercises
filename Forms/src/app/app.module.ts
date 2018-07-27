import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AuthenticationModule } from './authentication/authentication.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

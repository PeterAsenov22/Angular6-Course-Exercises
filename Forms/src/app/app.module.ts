import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AuthenticationModule } from './authentication/authentication.module'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'

import { AuthenticationService } from './authentication/authentication.service'
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

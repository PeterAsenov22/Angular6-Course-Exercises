import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AuthenticationModule } from './authentication/authentication.module'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'

import { AuthenticationService } from './authentication/authentication.service'
import { AuthGuard } from './guards/auth.guard'

import { TokenInterceptor } from './interceptors/token.interceptor'

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
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

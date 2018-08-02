import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app.routing'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { NavigationComponent } from './navigation/navigation.component'
import { SigninComponent } from './authentication/signin/signin.component'
import { SignupComponent } from './authentication/signup/signup.component'
import { HomeComponent } from './home/home.component'
import { AuthService } from './authentication/auth.service'

import { JWTInterceptor, ErrorInterceptor } from './interceptors'
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component'
import { AllFurnitureComponent } from './furniture/all-furniture/all-furniture.component'
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component'
import { MyFurnitureComponent } from './furniture/my-furniture/my-furniture.component'
import { CustomMinDirective } from './directives/custom-min-validator.directive'
import { CustomMaxDirective } from './directives/custom-max.validator.directive'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CreateFurnitureComponent,
    AllFurnitureComponent,
    FurnitureDetailsComponent,
    MyFurnitureComponent,
    CustomMinDirective,
    CustomMaxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

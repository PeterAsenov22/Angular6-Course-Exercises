import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { LoginModel } from '../models/login.model'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  model: LoginModel
  errMsg: string

  constructor (private authService: AuthenticationService, private router: Router) {
    this.model = new LoginModel('', '')
  }

  login () {
    this.authService
      .login(this.model)
      .subscribe(data => {
        this.successfullLogin(data)
      },
      err => {
        this.errMsg = err.error.description
      }
    )
  }

  private successfullLogin (data) {
    const authtoken = data['_kmd']['authtoken']
    this.authService.authtoken = authtoken
    sessionStorage.setItem('authtoken', authtoken)
    sessionStorage.setItem('username', data['username'])
    this.router.navigate(['/home'])
  }
}

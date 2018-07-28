import { Component } from '@angular/core'
import { LoginModel } from '../models/login.model'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  model: LoginModel
  errMsg: string

  constructor (private authService: AuthenticationService) {
    this.model = new LoginModel('', '')
  }

  login () {
    this.authService
      .login(this.model)
      .subscribe(() => {},
        err => {
          this.errMsg = err.error.description
        }
      )
  }
}

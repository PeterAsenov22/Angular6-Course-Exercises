import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { RegisterModel } from '../models/register.model'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  model: RegisterModel
  errMsg: string

  constructor (private authService: AuthenticationService, private router: Router) {
    this.model = new RegisterModel('', '', '', '', '', '')
  }

  register () {
    const registerModel = Object.assign({}, this.model)
    delete registerModel['confirmPassword']

    this.authService
      .register(registerModel)
      .subscribe(() => {
        this.router.navigate(['/login'])
      },
      err => {
        this.errMsg = err.error.description
        this.model.confirmPassword = null
      })
  }
}

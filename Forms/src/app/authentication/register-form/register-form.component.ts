import { Component, OnInit } from '@angular/core'
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
  model: RegisterModel

  constructor () {
    this.model = new RegisterModel('', '', '', '', '')
  }

  ngOnInit () {
  }
}

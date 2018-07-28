import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { LoginModel } from './models/login.model'
import { RegisterModel } from './models/register.model'

const appKey = 'kid_r1VAWpKEm'
const registerUrl = `https://baas.kinvey.com/user/${appKey}`
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable()
export class AuthenticationService {
  private currentAuthtoken

  constructor (private http: HttpClient) {
  }

  register (registerModel: RegisterModel) {
    return this.http
      .post(registerUrl,
        JSON.stringify(registerModel)
      )
  }

  login (loginModel: LoginModel) {
    return this.http
      .post(loginUrl,
        JSON.stringify(loginModel)
      )
  }

  logout () {
    return this.http
      .post(logoutUrl, {})
  }

  checkIfLoggedIn () {
    return this.currentAuthtoken === sessionStorage.getItem('authtoken')
  }

  get authtoken () {
    return this.currentAuthtoken
  }

  set authtoken (value: string) {
    this.currentAuthtoken = value
  }
}

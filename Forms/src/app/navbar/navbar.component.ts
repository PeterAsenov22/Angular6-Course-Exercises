import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor (private authService: AuthenticationService, private router: Router) {
  }

  logout() {
    this.authService
      .logout()
      .subscribe(() => {
        this.authService.authtoken = ''
        sessionStorage.clear()
        this.router.navigate(['/login'])
      })
  }
}

import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Router } from '@angular/router'
import { AuthenticationService } from '../authentication/authentication.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkAuth()
  }

  checkAuth () {
    if (this.authService.checkIfLoggedIn()) {
      return true
    }

    this.router.navigate(['/login'])
    return false
  }
}

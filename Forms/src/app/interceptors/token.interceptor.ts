import {
  HttpResponse,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators'

import { AuthenticationService } from '../authentication/authentication.service'

const appKey = 'kid_r1VAWpKEm'
const appSecret = 'cd066588efa0434399357497e8c8a859'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor (private authService: AuthenticationService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/login') || req.url.endsWith(`/${appKey}`)) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          'Content-Type': 'application/json'
        }
      })
    } else {
      req = req.clone({
        setHeaders: {
          'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
        }
      })
    }

    return next
      .handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && req.url.endsWith('/login')) {
          this.successfullLogin(event.body)
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              this.router.navigate(['/login'])
              break
            case 404:
              this.router.navigate(['/not-found'])
              break
            case 500:
              this.router.navigate(['/server-error'])
              break
          }
        }
      }
      ))
  }

  private successfullLogin (data) {
    const authtoken = data['_kmd']['authtoken']
    this.authService.authtoken = authtoken
    sessionStorage.setItem('authtoken', authtoken)
    sessionStorage.setItem('username', data['username'])
    this.router.navigate(['/home'])
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ApiComponent } from './api/api/api.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService, private apiService: ApiComponent) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // First, check if the token exists in cookies
    
    const tokenExists = this.apiService.getCookie('Token');

    if (!tokenExists) {
      // Token not found in cookies, route to 404
      this.router.navigate(['/404']);
      return false;
    }

    // Call a method in ApiService to check token validity
    return this.apiService.tokencheck().pipe(
      map(response => {
        if (response.message === 'true') {
          // Token is valid, allow navigation
          return true;
        } else {
          // Token is not valid, redirect to login page
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}

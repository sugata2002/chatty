import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiComponent } from './api/api/api.component';
import { isPlatformBrowser } from '@angular/common';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private apiService: ApiComponent , @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the token exists in localStorage
    let token: string | null = null; // Declare token variable
    
    if (isPlatformBrowser(this.platformId)) {
      // Access localStorage here
      token = localStorage.getItem('token'); // Assign value from localStorage
    }
    // console.log(token);
    
    if (!token) {
      // Token not found, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }

    // Call a method in ApiService to check token validity
    return this.apiService.tokench(token).pipe(
    
      map(response => {
        // console.log(response);
        
        if (response.message === 'true') {
          // Token is valid, allow navigation
          return true;
        } else {
          // Token is not valid, redirect to login page
          this.router.navigate(['/404']);
          return false;
        }
      }),
      catchError(error => {
        // Handle errors from API call, e.g., server error
        console.error('Error occurred while checking token validity:', error);
        // You can handle the error according to your application's requirements, e.g., redirect to an error page
        this.router.navigate(['/404']);
        // Return an observable that emits a boolean value
        return of(false);
      })
    );
  }
}

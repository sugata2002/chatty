
import { inject } from '@angular/core';
import { CanActivateFn , Router , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiComponent } from '../api/api/api.component';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of } from 'rxjs';

export const authGuardsGuard: CanActivateFn = (route : ActivatedRouteSnapshot , state:RouterStateSnapshot)  => {
  const router = inject(Router);
  const api = inject(ApiComponent)
  const cookie = inject(CookieService)
 
  let token = cookie.get("Token")
  // console.log(token );
  

  if (token) {
    // Call the API token check and return its observable
    return api.tokencheck().pipe(
      map((response: { message: string; }) => {
        // Check if the response message is true or false
        return response.message === 'true';
      }),
      catchError(error => {
        // Handle error, for example, token check failed
        console.error('Token check failed:', error);
        router.navigate(['404'])
        console.log("hii");
        
        return of(false); // Return false in case of error
      })
    );
  } else {
    
    router.navigate(['404'])
    console.log('hii');
    
    return of(false);
  }


};

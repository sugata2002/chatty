import { Component } from '@angular/core';
import { ApiComponent } from '../api/api/api.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
 constructor(private api : ApiComponent  , private cookies:CookieService){}
 

}

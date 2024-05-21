import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-api',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './api.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class ApiComponent {    
  constructor(private http:HttpClient , private route:Router) { }

  // baseurl = "http://localhost:9100/"
  baseurl = "https://chattyb-34.vercel.app/"
  isAuthenticated = true;
  username = "";

  //------------------------- api starts --------------------
 

  tokench(data :any):Observable<any>{
    // return this.http.get<any>(this.baseurl + "api/user/check", data);
    const url = `${this.baseurl}api/user/check?token=${data}`;
  
    // Make the HTTP GET request with the constructed URL
    return this.http.get<any>(url);
  }

  logout(): Observable<boolean> {
    return this.http.get<boolean>(this.baseurl + "api/user/logout", { withCredentials: true });
  }
  login(data: any) {
    this.http.post(this.baseurl + "api/user/login", data, {
      withCredentials: true
    }).subscribe((res: any) => {
      localStorage.setItem('fname' ,  res.fullName );
      
      if (res.tokens && res) {
        // Set token in local storage
        localStorage.setItem('token', res.tokens);
        // Navigate to '/chat'
        this.route.navigate(["/chat"]);
      } else {
        // Handle error if token is not received
      }
    });
  }
  
  signup(data: any) {
    this.http.post(this.baseurl + "api/user/register", data, {
      withCredentials: true
    }).subscribe((res: any) => {
      if (res.tokens && res) {
        localStorage.setItem('token', res.tokens);
        this.route.navigate(['/chat']);
      } else {
        // Handle error if token is not received
      }
    });
  }
  
}


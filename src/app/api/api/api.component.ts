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

  baseurl = "http://localhost:8080/"
  isAuthenticated = true;

  //------------------------- api starts --------------------
  tokencheck(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(this.baseurl+"api/user/check", { withCredentials: true });
  }

  logout(): Observable<boolean> {
    return this.http.get<boolean>(this.baseurl + "api/user/logout", { withCredentials: true });
  }

  login (data:any){
    this.http.post(this.baseurl + "api/user/login" , data , {
      withCredentials:true 
    }).subscribe(()=>{
      this.route.navigate(["/chat"])
    })
  }

  signup(data:any){
    this.http.post(this.baseurl + "api/user/register" , data , {
      withCredentials:true
    }).subscribe(()=>{
      this.route.navigate(['/chat'])
    })
  }
}



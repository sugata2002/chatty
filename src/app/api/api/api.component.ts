import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
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



  login (data:any){
    this.http.post(this.baseurl + "api/user/login" , data , {
      withCredentials:true 
    }).subscribe(()=>{
      this.route.navigate(["chat"])
    })
  }

  signup(data:any){
    this.http.post(this.baseurl + "api/user/register" , data , {
      withCredentials:true
    }).subscribe(()=>{
      this.route.navigate(['chat'])
    })
  }
}



import { Component, Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder,  FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from '../api/api/api.component';
import { NgIf } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [  RouterModule ,  FormsModule , ReactiveFormsModule  , NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  form !: FormGroup;
  isLoading = false
  constructor(private api : ApiComponent ,  private frombuilder: FormBuilder ){}
  ngOnInit() {
    this.form = this.frombuilder.group({
      username: '',
      password: '',
    });
    
  }
  
  login(){
    let isEmpty = false;
    let user = this.form.getRawValue()
    for (let key in user) {
      if ( user[key] === "") {
        isEmpty = true;
        break;
      }
    }
    if (!isEmpty) {
      this.isLoading=true
      this.api.login(user)
    }
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiComponent } from '../api/api/api.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { log } from 'console';
import { ChangeDetectorRef } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule ,  FormsModule , ReactiveFormsModule , NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  from !: FormGroup
  isLoading: boolean = false;

  constructor(private api : ApiComponent ,  private frombuilder: FormBuilder , private cdr:ChangeDetectorRef   ){}
  
  ngOnInit() {
    this.from = this.frombuilder.group({
      fullName: '',
      username: '',
      password: '',
      confirmPassword:'',
    });
  }


  signup(){
    let isEmpty=false
    let user = this.from.getRawValue()
    for (let x in user  ) {
      if (user[x] == "") {
        isEmpty= true;
        break
      }
    }
    if(!isEmpty){
      this.isLoading =true
     this.api.signup(user)
    }
  }
} 

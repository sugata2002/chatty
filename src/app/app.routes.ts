import { Router, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChattingPageComponent } from './chatting-page/chatting-page.component';
import { ErrorComponent } from './error/error.component';
// import {  authGuardsGuardFactory } from './guards/auth-guards.guard';
import { ApiComponent } from './api/api/api.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
// import { AuthGuard } from './auth.guard';
// import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'chat', component: ChattingPageComponent,canActivate:[AuthGuard]},
  { path: '404', component: ErrorComponent },
];

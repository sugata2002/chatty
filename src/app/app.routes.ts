import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(a => a.LoginComponent)
    },
    {
    path: 'signup',
    loadComponent: () => import('./sign-up/sign-up.component').then(a => a.SignUpComponent)
    },
    {
    path: 'chat',
    loadComponent: () => import('./chatting-page/chatting-page.component').then(a => a.ChattingPageComponent)
    },
];

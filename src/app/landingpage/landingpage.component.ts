import { NgIf, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee , faArrowRight , faBars, fas , faX , faHome , faCircleInfo , faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { ApiComponent } from '../api/api/api.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LandingpageComponent , FontAwesomeModule ,RouterModule ,NgIf   ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit  {
  faCoffee = faCoffee;
  faArrowRight = faArrowRight;
  faCoffees = [fas, faCoffee];
  fahome= faHome
  fabars= faBars;
  faarrowdown = faArrowDown
  facircleinfo = faCircleInfo
  fax = faX;
  isIconToggled: boolean = true;
  isAuth:boolean = true;
  constructor(private route:Router , private api:ApiComponent ,private cookies:CookieService ,@Inject(PLATFORM_ID) private platformId: Object){
    // this.isAuth = this.cookies.check("Token");
  }
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isAuth = !!localStorage.getItem("token");
    }
  }

  toggleIcon() {
    this.isIconToggled = !this.isIconToggled;
  }

  logout() {
    this.api.logout().subscribe(() => {
      localStorage.removeItem("token")
      this.isAuth = false; 
    }, error => {
      console.error("Logout failed:", error);
    });
  }

  // togglelogout(){
  //   this.api.tokench().subscribe((res)=>{
  //     this.isAuth = res.message === "true"
  //   })
  // }

  onclick(){
    
    this.route.navigate(['/chat']);
  
    
  }
 
  

}

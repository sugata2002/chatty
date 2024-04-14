import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee , faArrowRight , faBars, fas , faX , faHome , faCircleInfo , faArrowDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LandingpageComponent , FontAwesomeModule ,RouterModule ,NgIf ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  faCoffee = faCoffee;
  faArrowRight = faArrowRight;
  faCoffees = [fas, faCoffee];
  fahome= faHome
  fabars= faBars;
  faarrowdown = faArrowDown
  facircleinfo = faCircleInfo
  fax = faX;
  isIconToggled: boolean = true;

  toggleIcon() {
    this.isIconToggled = !this.isIconToggled;
  }


  

}

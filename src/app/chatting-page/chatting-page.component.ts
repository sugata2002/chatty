import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee , faArrowRight , faBars, fas , faX , faHome ,faPlay , faGear, faCircleInfo , faArrowDown , faMagnifyingGlass , faArrowRightFromBracket ,faComment} from '@fortawesome/free-solid-svg-icons';
import { ApiComponent } from '../api/api/api.component';
import { routes } from '../app.routes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chatting-page',
  standalone: true,
  imports: [FontAwesomeModule , NgFor , NgClass , NgIf , ],
  templateUrl: './chatting-page.component.html',
  styleUrl: './chatting-page.component.scss'
})
export class ChattingPageComponent {
  // for icons 
  faCoffee = faCoffee;
  famagnification = faMagnifyingGlass
  faArrowRight = faArrowRight;
  faCoffees = [fas, faCoffee];
  fahome= faHome
  fabars= faBars;
  faarrowdown = faArrowDown
  facircleinfo = faCircleInfo
  faArrowRightFromBracket= faArrowRightFromBracket
  fax = faX;
  faComment =faComment;
  faPlay=faPlay;
  faGear =faGear
  // icons end

  constructor(private api :ApiComponent , private route:Router){}

  fname = localStorage.getItem("fname");

  logout() {
    this.api.logout().subscribe(() => {
      localStorage.clear()
      
      this.route.navigate(["/"])
    }, error => {
      console.error("Logout failed:", error);
    });
  }
 
}

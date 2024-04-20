import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee , faArrowRight , faBars, fas , faX , faHome , faCircleInfo , faArrowDown , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chatting-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './chatting-page.component.html',
  styleUrl: './chatting-page.component.scss'
})
export class ChattingPageComponent {
  faCoffee = faCoffee;
  famagnification = faMagnifyingGlass
  faArrowRight = faArrowRight;
  faCoffees = [fas, faCoffee];
  fahome= faHome
  fabars= faBars;
  faarrowdown = faArrowDown
  facircleinfo = faCircleInfo
  fax = faX;
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee , faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LandingpageComponent , FontAwesomeModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  faCoffee = faCoffee;
  faArrowRight = faArrowRight;

}

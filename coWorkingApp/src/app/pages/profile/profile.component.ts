import { Component } from '@angular/core';
import { faArrowLeft, faChevronRight, faUser, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  faArrowLeft = faArrowLeft;
  faChevronRight = faChevronRight;
  faUser = faUser;
  faBuildingUser = faBuildingUser;

}

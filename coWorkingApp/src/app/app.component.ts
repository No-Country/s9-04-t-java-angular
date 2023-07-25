import { Component } from '@angular/core';
import { faHouse, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'coWorkingApp';

  navbarMenu: boolean = false;

  faHouse = faHouse;
  faBars = faBars;
  faXmark = faXmark;

  toggleNavbar() {
    this.navbarMenu = !this.navbarMenu;
    document.body.classList.toggle('hidden-scroll');
  }

}
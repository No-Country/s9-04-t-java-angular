import { Component, OnInit, inject } from '@angular/core';
import { faHouse, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'coWorkingApp';

  navbarMenu: boolean = false;

  authService = inject(AuthService);
  user: any;

  faHouse = faHouse;
  faBars = faBars;
  faXmark = faXmark;

  ngOnInit(): void {
    this.authService.getUser();
    this.getUserObservable();
  }

  toggleNavbar() {
    this.navbarMenu = !this.navbarMenu;
    document.body.classList.toggle('hidden-scroll');
  }

  logOut() {
    this.authService.logout();
  }

  getUserObservable() {
    this.authService.getUserObservable().subscribe({
      next: (data) => {
        this.user = data;
      }
    });
  }

}
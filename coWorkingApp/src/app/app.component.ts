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
    console.log(`
          .~?P#@#                          &@#P?^.          
    .^?P#&@@@@@@@^                        ~@@@@@@@&#P7^.    
:7P#@@@@@@@@@@@@@@B~                    ~#@@@@@@@@@@@@@@#5!.
~^..:~JPB&@@@@@@@@@@&J^.    A  A    .^Y&@@@@@@@@@@&BP?~:..^~
          .G@@@@@@@@@@@@#J.P@PG@5:J#@@@@@@@@@@@@P.          
            YGBB##&&&@@@@@@@@@@@@@@@@@@&&&##BBGJ            
                     .~P&@@@@@@@@@@&P~                      
                         ^P@@@@@@5^                         
    `)
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
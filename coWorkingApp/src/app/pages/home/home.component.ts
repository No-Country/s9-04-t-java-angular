import { Component, OnInit, inject } from '@angular/core';
import { AlertsReservaService } from 'src/app/services/alerts-reserva.service';
import { CoworkService } from 'src/app/services/cowork.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workspaces: any[] = [];

  coworkService = inject(CoworkService);

  constructor(private alertsService: AlertsReservaService,){}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.coworkService.getAllWorkspaces().subscribe({
      next: (res: any) => {
        this.workspaces = res;
      },
      error: (err) => console.log(err),
      complete: () => {}
    });
  }

}

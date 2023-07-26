import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { MyReservationsService } from 'src/app/services/my-reservations.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit{
  faPhone = faPhone;
  reservations: any[];

  constructor(private reservationService: MyReservationsService){}

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(): void {
    this.reservationService.getAllReservations().subscribe(
      (data) => {
        this.reservations = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

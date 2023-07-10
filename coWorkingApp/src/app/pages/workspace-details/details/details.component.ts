import { Component, OnInit, inject } from '@angular/core';
import { CoworkService } from 'src/app/services/cowork.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  coworkService = inject(CoworkService);
  
  ngOnInit(): void {
  }


}

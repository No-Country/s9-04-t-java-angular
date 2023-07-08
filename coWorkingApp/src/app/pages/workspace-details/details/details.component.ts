import { Component, OnInit, inject } from '@angular/core';
import { CoworkService } from 'src/app/services/cowork.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  items = ['item 1', 'item 2', 'item 3'];
  expandedIndex = 0;

  product: any;
  coworkService = inject(CoworkService);
  
  ngOnInit(): void {
    this.coworkService.getProductObservable().subscribe({
      next: (res) => {
        this.product = res;
      }
    });
  }


}

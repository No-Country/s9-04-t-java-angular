import { Component, OnInit, inject } from '@angular/core';
import { CoworkService } from 'src/app/services/cowork.service';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  host: {'class': 'flex flex-col flex-grow'}
})
export class DetailsComponent implements OnInit {

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  coworkService = inject(CoworkService);
  workspace: any;
  
  ngOnInit(): void {

    this.coworkService.getWorkspaceById().subscribe({
      next: (res: any) => {
        this.workspace = res;
      }
    })

  }


}

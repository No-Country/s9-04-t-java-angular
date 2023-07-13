import { Component, inject } from '@angular/core';
import { faSearch, faSlidersH, faLocationDot, faChevronDown, faTableList} from '@fortawesome/free-solid-svg-icons';
import { CoworkService } from 'src/app/services/cowork.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  query: any;
  searchControl: any = new FormControl<any>('');
  searchResults: any[] = [];

  workspaces: any[] = [];
  coworkService = inject(CoworkService);

  faSearch = faSearch;
  faSlidersH = faSlidersH;
  faLocationDot = faLocationDot;
  faChevronDown = faChevronDown;
  faTableList = faTableList;

  constructor(
    private dialogService: DialogService
  ) {
    this.searchControl.valueChanges.subscribe(value => {
      this.query = value;
      console.log('query', this.query)
    })
  }

  // ngOnInit(): void {
  //   window.scrollTo({ top: 0 });
  //   this.coworkService.getAllWorkspaces().subscribe({
  //     next: (res: any) => {
  //       if(this.searchControl.value === '') {
  //         this.workspaces = res;
  //         console.log('workspaces desde search-bar', this.workspaces)
  //       } else {
  //         this.workspaces = res.filter(item =>
  //           item.name.includes(this.query) ||
  //           item.location.includes(this.query) ||
  //           item.capacidad.toString().includes(this.query) ||
  //           item.description.includes(this.query) ||
  //           item.id.toString().includes(this.query) ||
  //           item.price.toString().includes(this.query) ||
  //           item.rating.toString().includes(this.query)
  //         );
  //         console.log('elci', this.workspaces);
  //       }
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => {}
  //   });
  // }

  openDialog() {
    this.dialogService.open();
  }

}

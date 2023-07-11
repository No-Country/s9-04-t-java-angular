import { Component, inject } from '@angular/core';
import { faSearch, faSlidersH, faLocationDot, faChevronDown, faTableList} from '@fortawesome/free-solid-svg-icons';
import { CoworkService } from 'src/app/services/cowork.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchControl: any = new FormControl('');
  searchResults: any[] = [];

  faSearch = faSearch;
  faSlidersH = faSlidersH;
  faLocationDot = faLocationDot;
  faChevronDown = faChevronDown;
  faTableList = faTableList;

  constructor(private dialogService: DialogService) {
    this.searchControl.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value: string) => {
      // this.searching(value);
    });
  }

  // searching(query: string): any {
  //   this.coworkService.getAllWorkspaces()
  //   .subscribe(res => {
  //     this.searchResults = res;
  //   })
  // }


  workspaces: any[] = [];

  coworkService = inject(CoworkService);

  // ngOnInit(): void {
  //   this.coworkService.getAllWorkspaces().subscribe({
  //     next: (res: any) => {
  //       this.workspaces = res;
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => {}
  //   });
  // }

  openDialog() {
    this.dialogService.open();
  }

}

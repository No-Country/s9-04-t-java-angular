import { Component } from '@angular/core';
import { faSearch, faSlidersH, faLocationDot, faChevronDown, faTableList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  faSearch = faSearch;
  faSlidersH = faSlidersH;
  faLocationDot = faLocationDot;
  faChevronDown = faChevronDown;
  faTableList = faTableList;

  constructor() {}

  closeModal() {
    const modal: any = document.getElementById('defaultModal');
    modal.setAttribute('data-modal-hide', '');
  }
}

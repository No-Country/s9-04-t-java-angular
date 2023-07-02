import { Component } from '@angular/core';
import { faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  faClose = faClose;

}

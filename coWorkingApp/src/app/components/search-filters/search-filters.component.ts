import { Component } from '@angular/core';
import { faClose, faChevronDown, faStar, faLocationDot, faUsers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  faClose = faClose;
  faChevronDown = faChevronDown;
  faStar = faStar;
  faLocationDot = faLocationDot;
  faUsers = faUsers;


  items = ['Ordenar', 'Precio', 'Distancia', 'Capacidad', 'Servicios'];
  expandedIndex = 0;

}

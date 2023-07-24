import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-direccion',
  templateUrl: './direccionSite.component.html',
  styleUrls: ['./direccionSite.component.css']
})
export class DireccionSiteComponent {
  faLeft = faArrowLeft;

}

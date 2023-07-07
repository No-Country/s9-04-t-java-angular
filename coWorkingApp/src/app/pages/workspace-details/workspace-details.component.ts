import { Component } from '@angular/core';
import { faArrowLeft, faShareNodes, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent {

  faArrowLeft = faArrowLeft;
  faShareNodes = faShareNodes;
  faLocationDot = faLocationDot;
  faStar = faStar;
  faHeart = faHeart;

  workspace = {
    id: 3,
    name: 'Espacio 3',
    images: [
      'https://i.blogs.es/0c9485/the-batman-cartel/1366_2000.jpeg',
      'https://estaticos-cdn.elperiodico.com/clip/bd2a087e-0076-4792-80e5-27e8d52955c1_alta-libre-aspect-ratio_default_0.png',
      'https://media.revistagq.com/photos/62f612194b12f9b6048b3554/16:9/pass/the-batman-2-pelicula.jpeg',
    ],
    location: 'Avenida Buenos Aires, 2050, CABA',
    capacidad: 15,
    rating: [
      4.5,
      3,
      4.5,
      3,
      2.1,
      5,
      4.5,
      3.1
    ],
    price: 150
  }

}

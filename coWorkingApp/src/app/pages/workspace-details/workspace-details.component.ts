import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { faArrowLeft, faShareNodes, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { CoworkService } from 'src/app/services/cowork.service';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit, OnDestroy {

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
    price: 150,
    description: 'El nuevo coworking para empresas y autónomos en el corazón del barrio de Sant Andreu, en Barcelona, con todo lo que necesitas: sala de reuniones, estudio fotográfico, servicio de impresión, espacio de descanso con café y agua, Ethernet y Wifi, y lo más importante, acceso las 24h del día.'
  }

  // tests

  product: any;

  id: number = 0;

  _activatedRoute = inject(ActivatedRoute);
  coworkService = inject(CoworkService);

  interval: any;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.id = params['id'];
      },
      error: (error) => console.log(error),
      complete: () => { }
    });
    this.coworkService.getProduct(this.id);
    this.coworkService.getProductObservable().subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (error) => {console.log(error)},
      complete: () => { }
    });
  }

  ngOnDestroy(): void {
    this.coworkService.selectedProduct.next(undefined)
  }

}

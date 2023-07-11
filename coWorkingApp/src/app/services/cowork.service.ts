import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoworkService {

  workspaces: any[] = [
    {
      id: 1,
      name: 'Espacio 1',
      images: [
        'https://www.lista-office.com/fileadmin/lo/lo-business-solutions/Lista_Office_LO_B2B_Herobackground.jpg',
        'https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg',
        'https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055_wide-65e041ed6c0f8e5feec6d3951fa3459431b05519-s1400-c100.jpg'
      ],
      location: 'Avenida Buenos Aires, 2050, CABA',
      capacidad: 1,
      rating: [
        5,
        4.5,
        3.1,
        1,
        4.8,
        2.6
      ],
      price: 150.99,
      description: 'El nuevo coworking para empresas y autónomos en el corazón del barrio de Sant Andreu, en Barcelona, con todo lo que necesitas: sala de reuniones, estudio fotográfico, servicio de impresión, espacio de descanso con café y agua, Ethernet y Wifi, y lo más importante, acceso las 24h del día.'
    },
    {
      id: 2,
      name: 'Espacio 2',
      images: [
        'https://i.blogs.es/0e7127/2560_3000/1366_2000.jpeg',
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/05/gta-online-1943171.jpg?tf=3840x',
        'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/06/17/60cb034db908c.r_d.674-358-9375.jpeg'
      ],
      location: 'Avenida Buenos Aires, 2050, CABA',
      capacidad: 15,
      rating: [
        4.5,
        5,
        5
      ],
      price: 259,
      description: 'El nuevo coworking para empresas y autónomos en el corazón del barrio de Sant Andreu, en Barcelona, con todo lo que necesitas: sala de reuniones, estudio fotográfico, servicio de impresión, espacio de descanso con café y agua, Ethernet y Wifi, y lo más importante, acceso las 24h del día.'
    },
    {
      id: 3,
      name: 'Espacio 3',
      images: [
        'https://i.blogs.es/0c9485/the-batman-cartel/1366_2000.jpeg',
        'https://www.latercera.com/resizer/gtE5wcocrX9i500-vLpgccD60DI=/arc-anglerfish-arc2-prod-copesa/public/NCJRQRPOARA5XGJQGSHNQDCCRI.jpg',
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
    },
  ];

  http = inject(HttpClient);

  workspacesSubject: BehaviorSubject<any> = new BehaviorSubject(this.workspaces);

  selectedWorkspace: BehaviorSubject<any> = new BehaviorSubject(undefined);

  getAllWorkspaces() {
    return this.workspacesSubject.asObservable();
  }

  getWorkspaceById(id: number) {
    let result = this.workspaces.filter((workspace: any) => workspace.id == id);
    this.selectedWorkspace.next(result[0]);
    return this.selectedWorkspace.asObservable();
  }

  getProduct(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }




}

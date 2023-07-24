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
      name: 'Espacio 1 con un nombre mas largo para ver como queda',
      images: [
        'https://t4.ftcdn.net/jpg/03/13/49/07/360_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg',
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
        'https://f4.bcbits.com/img/a3250604502_2.jpg',
        'https://f4.bcbits.com/img/a2320864159_16.jpg',
        'https://f4.bcbits.com/img/a2711163622_16.jpg'
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
    {
      id: 4,
      name: 'Espacio 4',
      images: [
        'https://wallpapercave.com/wp/wp3756528.jpg',
        'https://cutewallpaper.org/21/dark-souls-wallpaper-hd/Best-34-Dark-Souls-Backgrounds-on-HipWallpaper-Beautiful-.jpg',
        'https://wallpapercave.com/wp/wp3481407.jpg'
      ],
      location: 'Avenida Buenos Aires, 2050, CABA',
      capacidad: 1,
      rating: [
        5,
        4.5,
        3.1,
        1,
        4.8,
        3.1,
        1,
        4.8,
        2.6
      ],
      price: 424.99,
      description: 'El nuevo coworking para empresas y autónomos en el corazón del barrio de Sant Andreu, en Barcelona, con todo lo que necesitas: sala de reuniones, estudio fotográfico, servicio de impresión, espacio de descanso con café y agua, Ethernet y Wifi, y lo más importante, acceso las 24h del día.'
    },
    {
      id: 5,
      name: 'Espacio 5 con un nombre mas largo para ver como queda',
      images: [
        'https://static01.nyt.com/images/2017/03/31/us/31mcdonalds_xp/31mcdonalds_xp-superJumbo.jpg',
        'https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/quarter-pounder-with-cheese.jpg?quality=82&strip=1',
        'https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off'
      ],
      location: 'Av. Corrientes 992, CABA',
      capacidad: 32,
      rating: [
        4.5,
        5,
        5,
        3.4,
        4,5,
        2,
        4,
        2.2
      ],
      price: 360,
      description: 'El nuevo coworking para empresas y autónomos en el corazón del barrio de Sant Andreu, en Barcelona, con todo lo que necesitas: sala de reuniones, estudio fotográfico, servicio de impresión, espacio de descanso con café y agua, Ethernet y Wifi, y lo más importante, acceso las 24h del día.'
    },
    {
      id: 6,
      name: 'Espacio 6',
      images: [
        'https://jornadasambiente.ar/wp-content/uploads/2021/05/LAGUNA-2.jpg',
        'https://web.archive.org/web/20161016122125if_/http://static.panoramio.com/photos/large/43494805.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/71/a3/e2/parque-unzue.jpg',
      ],
      location: 'Avenida Buenos Aires, 2050, CABA',
      capacidad: 20,
      rating: [
        4.5,
        5,
        4.5,
        5,
        4.1,
        3,
        1.1,
        5,
        2.5,
        5,
        4.5,
        3,
        3.1,
        5,
        4.5,
        4.1
      ],
      price: 420,
      description: 'El nuevo coworking para empresas y autónomos en el corazón del barrio de Sant Andreu, en Barcelona, con todo lo que necesitas: sala de reuniones, estudio fotográfico, servicio de impresión, espacio de descanso con café y agua, Ethernet y Wifi, y lo más importante, acceso las 24h del día.'
    },
  ];

  http = inject(HttpClient);

  workspacesSubject: BehaviorSubject<any> = new BehaviorSubject(this.workspaces);

  selectedWorkspace: BehaviorSubject<any> = new BehaviorSubject(undefined);

  getAllWorkspaces() {
    return this.workspacesSubject.asObservable();
  }

  filterWorkspaceById(id: number) {
    let result = this.workspaces.filter((workspace: any) => workspace.id == id);
    this.selectedWorkspace.next(result[0]);
  }

  getWorkspaceById() {
    return this.selectedWorkspace.asObservable();
  }

  getProduct(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }




}

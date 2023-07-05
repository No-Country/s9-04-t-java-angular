import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  workspaces = [
    {
      id: 1,
      name: 'Espacio 1',
      images: [
        'https://www.lista-office.com/fileadmin/lo/lo-business-solutions/Lista_Office_LO_B2B_Herobackground.jpg',
        'https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg',
        'https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055_wide-65e041ed6c0f8e5feec6d3951fa3459431b05519-s1400-c100.jpg'
      ],
      capacidad: 1,
      rating: [
        5,
        4.5,
        3.1
      ],
      price: 150.99      
    },
    {
      id: 2,
      name: 'Espacio 2',
      images: [
        'https://i.blogs.es/0e7127/2560_3000/1366_2000.jpeg',
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/05/gta-online-1943171.jpg?tf=3840x',
        'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/06/17/60cb034db908c.r_d.674-358-9375.jpeg'
      ],
      capacidad: 15,
      rating: [
        4.5,
        5,
        5
      ],
      price: 150
    },
    {
      id: 3,
      name: 'Espacio 3',
      images: [
        'https://i.blogs.es/0c9485/the-batman-cartel/1366_2000.jpeg',
        'https://estaticos-cdn.elperiodico.com/clip/bd2a087e-0076-4792-80e5-27e8d52955c1_alta-libre-aspect-ratio_default_0.png',
        'https://media.revistagq.com/photos/62f612194b12f9b6048b3554/16:9/pass/the-batman-2-pelicula.jpeg',
      ],
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
    },
  ]

}

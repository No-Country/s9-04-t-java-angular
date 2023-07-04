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
        'https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg',
        'https://www.lista-office.com/fileadmin/lo/lo-business-solutions/Lista_Office_LO_B2B_Herobackground.jpg',
        'https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055_wide-65e041ed6c0f8e5feec6d3951fa3459431b05519-s1400-c100.jpg'
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
        'https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055_wide-65e041ed6c0f8e5feec6d3951fa3459431b05519-s1400-c100.jpg',
        'https://www.lista-office.com/fileadmin/lo/lo-business-solutions/Lista_Office_LO_B2B_Herobackground.jpg',
        'https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg',
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

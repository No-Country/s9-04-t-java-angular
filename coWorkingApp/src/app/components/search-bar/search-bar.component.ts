import { Component, inject } from '@angular/core';
import { faSearch, faSlidersH, faLocationDot, faChevronDown, faTableList} from '@fortawesome/free-solid-svg-icons';
import { CoworkService } from 'src/app/services/cowork.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';
import { debounceTime } from 'rxjs/operators';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  formAddCowork: any;

  query: any;
  searchControl: any = new FormControl<any>('');
  searchResults: any[] = [];

  workspaces: any[] = [];
  coworkService = inject(CoworkService);

  faSearch = faSearch;
  faSlidersH = faSlidersH;
  faLocationDot = faLocationDot;
  faChevronDown = faChevronDown;
  faTableList = faTableList;
  base64Image: string;

  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {
    this.formAddCowork = this.formBuilder.group({
      title: 'Coworking Spot',
      description: 'Lorem',
      images: [['https://t4.ftcdn.net/jpg/03/13/49/07/360_F_313490735_YCp2jT4wiMTryffcBH59Ysl06j2OVEat.jpg',
      'https://static01.nyt.com/images/2021/05/02/business/00officespace8/00officespace8-superJumbo.jpg',
      'https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055_wide-65e041ed6c0f8e5feec6d3951fa3459431b05519-s1400-c100.jpg'
    ]],
      direction: 'Buenos Aires CABA',
      capacity: 20,
      rating: 1,
      services: [['wifi','tv']],
      price: 10,
      user_id: '61ae7ddd-11ff-4106-9654-1b9ca8367daa'
    })

    this.searchControl.valueChanges.pipe(debounceTime(600)).subscribe((query) => {
      console.log(query);
      this.query = query;
      this.buscar();
    });

  }

  openDialog() {
    this.dialogService.open();
  }

  // Supabase Table Coworking Spaces

  coworks: any[] = [];
  step: any = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';

  async getAllWorkspaces() {
    let { data: coworking_spaces, error } = await supabase
    .from('coworking_spaces')
    .select('id, title, description, price')

    this.coworks = coworking_spaces;
  }


  async addCowork() {
    const addCowork = this.formAddCowork.getRawValue();
    // console.log('addCowork', addCowork)

    const { data, error } = await supabase
    .from('coworking_spaces')
    .insert([
      {
        title: addCowork.title,
        description: addCowork.description,
        images: addCowork.images,
        services: addCowork.services,
        direction: addCowork.direction,
        price: addCowork.price,
        capacity: addCowork.capacity,
        user_id: addCowork.user_id

      },
    ])

    console.log(data, error)
  }


  // Update User
  async updateUser() {
    const { data, error } = await supabase.auth.updateUser({
      // email: "user@mail.com",
      // password: "123456",
      // data: { hello: 'world' }
      data: {
        phone: '12345678',
        name: 'Cris',
        lastname: 'Morena'
      }
    })
    console.log('data',data)
  }

  userData: any;
  async getUserId() {
    const { data: { user } } = await supabase.auth.getUser()
    this.userData = user.identities[0].user_id;
    return this.userData;
  }

  async logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // Ha ocurrido un error al cerrar sesión
    } else {
      // La sesión se ha cerrado correctamente
      localStorage.removeItem('email');
      localStorage.removeItem('token');
    }
  }

  resultadosDeBuscar: any;

  async buscar() {

    let { data: coworking_spaces, error } = await supabase
    .from('coworking_spaces')
    .select("*")
    .ilike('title', `%${this.query}%`)

    this.resultadosDeBuscar = coworking_spaces;

    this.coworkService.workspacesSubject.next(this.resultadosDeBuscar)
  }

}


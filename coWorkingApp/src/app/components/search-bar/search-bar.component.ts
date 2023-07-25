import { Component, inject } from '@angular/core';
import { faSearch, faSlidersH, faLocationDot, faChevronDown, faTableList} from '@fortawesome/free-solid-svg-icons';
import { CoworkService } from 'src/app/services/cowork.service';
import { DialogService } from 'src/app/services/dialog.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';

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
    this.searchControl.valueChanges.subscribe(value => {
      this.query = value;
      console.log('query', this.query)
    })

    this.formAddCowork = this.formBuilder.group({
      title: 'Hola23',
      description: 'Hola23',
      services: 'Hola23',
      direction: '',
      price: 10,
      capacity: 20
    })
  }

  // ngOnInit(): void {
  //   window.scrollTo({ top: 0 });
  //   this.coworkService.getAllWorkspaces().subscribe({
  //     next: (res: any) => {
  //       if(this.searchControl.value === '') {
  //         this.workspaces = res;
  //         console.log('workspaces desde search-bar', this.workspaces)
  //       } else {
  //         this.workspaces = res.filter(item =>
  //           item.name.includes(this.query) ||
  //           item.location.includes(this.query) ||
  //           item.capacidad.toString().includes(this.query) ||
  //           item.description.includes(this.query) ||
  //           item.id.toString().includes(this.query) ||
  //           item.price.toString().includes(this.query) ||
  //           item.rating.toString().includes(this.query)
  //         );
  //         console.log('elci', this.workspaces);
  //       }
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => {}
  //   });
  // }

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

    console.log(coworking_spaces)

  }


  async addCowork() {

    const addCowork = this.formAddCowork.getRawValue();


    const { data, error } = await supabase
    .from('coworking_spaces')
    .insert([
      {
        title: addCowork.title,
        description: addCowork.description,
        services: addCowork.services,
        direction: addCowork.direction,
        price: addCowork.price,
        capacity: addCowork.capacity

      },
    ])

    // this.step++;

    console.log(data, error)
  }

}


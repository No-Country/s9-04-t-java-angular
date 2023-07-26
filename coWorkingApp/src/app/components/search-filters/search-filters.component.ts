import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faClose, faChevronDown, faStar, faLocationDot, faUsers} from '@fortawesome/free-solid-svg-icons';
import { Options } from '@angular-slider/ngx-slider';
import { DialogService } from 'src/app/services/dialog.service';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';
import { CoworkService } from 'src/app/services/cowork.service';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }

  form: any;
  filtros: any;

  coworkService = inject(CoworkService);

  faClose = faClose;
  faChevronDown = faChevronDown;
  faStar = faStar;
  faLocationDot = faLocationDot;
  faUsers = faUsers;

  optionsPrice: Options = {
    floor: 0,
    ceil: 500
  };

  optionsKm: Options = {
    floor: 0,
    ceil: 500
  };

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService
    ) {
    this.form = this.fb.group({
      betters: false,
      closer: false,
      room: this.isRoom,
      minPrice: [0],
      maxPrice: [500],
      // minKm: [0],
      // maxKm: [500],
      sWifi: '',
      sPrinter: '',
      // sRoom: '',
      sChairs: '',
      sParking: '',
      sLockers: '',
      sCalefaction: ''
    })
  }
  ngOnInit(): void {}

  showResults(){
    this.filtrar()
    console.log(this.form.value);
    this.onCloseModal();
    this.dialogService.close();
  }

  isBetters: boolean = false;
  isCloser: boolean = false;
  isRoom: boolean = false;

  optionSelectedBetters(){
    this.isBetters = !this.isBetters;
    this.form.value.betters = this.isBetters;
  }

  optionSelectedCloser(){
    this.isCloser = !this.isCloser;
    this.form.value.closer = this.isCloser;
  }

  optionSelectedRoom(){
    this.isRoom = !this.isRoom;
    this.form.value.room = this.isRoom;
  }


  // Dialog

  close() {
    this.dialogService.close()
  }

  async filtrar() {
    const room = this.form.value.room;
    let { data: coworking_spaces, error } = await supabase
    .from('coworking_spaces')
    .select("*")
    .eq('room', `${room}`)
    // .ilike('services', `%${this.filtros}%`)
    // .in('services', ['Array', 'Values'])

    this.filtros = coworking_spaces;
    console.log(this.filtros)

    this.coworkService.workspacesSubject.next(this.filtros)
  }
}

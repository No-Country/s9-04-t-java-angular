import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faClose, faChevronDown, faStar, faLocationDot, faUsers} from '@fortawesome/free-solid-svg-icons';
import { Options } from '@angular-slider/ngx-slider';
import { DialogService } from 'src/app/services/dialog.service';


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
      room: false,
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
}

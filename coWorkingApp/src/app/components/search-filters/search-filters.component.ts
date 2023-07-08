import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faClose, faChevronDown, faStar, faLocationDot, faUsers} from '@fortawesome/free-solid-svg-icons';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {
  formPrice: FormGroup | undefined;
  formKm: FormGroup | undefined;

  faClose = faClose;
  faChevronDown = faChevronDown;
  faStar = faStar;
  faLocationDot = faLocationDot;
  faUsers = faUsers;

  value: number = 0;
  highValue: number = 500;
  optionsPrice: Options = {
    floor: 0,
    ceil: 500
  };

  minKm: any = 0;
  maxKm: any = 500;
  optionsKm: Options = {
    floor: 0,
    ceil: 500
  };


  constructor(
    private fb: FormBuilder) {
      this.formPrice = this.fb.group({
        value: this.value,
        highValue: this.highValue
      });
      this.formKm = this.fb.group({
        minKm: this.minKm,
        maxKm: this.maxKm
      });
    }

  ngOnInit(): void {
    console.log(this.value, this.highValue)
  }

}

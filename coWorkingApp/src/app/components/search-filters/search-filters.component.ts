import { Component, Output, EventEmitter } from '@angular/core';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  faClose = faClose;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();

  constructor(private overlayRef: OverlayRef) { }

  cerrarDialogo() {
    this.closeDialog.emit();
  }

}

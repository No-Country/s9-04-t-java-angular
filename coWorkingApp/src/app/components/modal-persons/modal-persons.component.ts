import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { PersonalDataService } from 'src/app/services/personal-data.service';



@Component({
  selector: 'app-modal-persons',
  templateUrl: './modal-persons.component.html',
  styleUrls: ['./modal-persons.component.css']
})
export class ModalPersonsComponent {
  faChevronUp = faChevronUp;
  faUser = faUser;
  numberPersons: number = 1;

  @ViewChild('modalPersona') modalPersona!: TemplateRef<any>;
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef,
    private perDataService: PersonalDataService) { }


    decreaseNumber() {
      if (this.numberPersons > 1) {
        this.numberPersons--;
        this.perDataService.saveNumberPersons(this.numberPersons);
      }
    }
    
    increaseNumber() {
      this.numberPersons++;
      this.perDataService.saveNumberPersons(this.numberPersons);
    }
    


  openModalPersons(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true
      });
      this.overlayRef.attach(new TemplatePortal(this.modalPersona, this.viewContainerRef));
    }
  }
  

  closeModalPersons(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null!;
    }
  }
}

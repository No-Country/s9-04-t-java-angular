import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-modal-persons',
  templateUrl: './modal-persons.component.html',
  styleUrls: ['./modal-persons.component.css']
})
export class ModalPersonsComponent {

  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  openModalPersons(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true
      });
      this.overlayRef.attach(new TemplatePortal(this.modalTemplate, this.viewContainerRef));
    }
  }
  

  closeModalPersons(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null!;
    }
  }
}
 

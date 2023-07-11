import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { SearchFiltersComponent } from '../components/search-filters/search-filters.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private overlayRef?: OverlayRef;

  constructor(private overlay: Overlay) { }

  open() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    const portal = new ComponentPortal(SearchFiltersComponent);
    this.overlayRef.attach(portal);

    this.overlayRef.backdropClick().subscribe(() => {
      this.close();
    });
  }

  close() {
    this.overlayRef?.detach();
  }
}

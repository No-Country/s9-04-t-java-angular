import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { faArrowLeft, faShareNodes, faLocationDot, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoworkService } from 'src/app/services/cowork.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { Location } from '@angular/common'
import { ReservationComponent } from './reservation/reservation.component';
@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit, OnDestroy {

  faArrowLeft = faArrowLeft;
  faShareNodes = faShareNodes;
  faLocationDot = faLocationDot;
  faStar = faStar;
  faHeart = faHeart;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  workspace: any;
  workspaceSub: any;
  id: number = 0;
  displayedImage: number = 0;

  _activatedRoute = inject(ActivatedRoute);
  coworkService = inject(CoworkService);
  detailsOpen: any =  this.personalDataServ.getDetailsOpenValue(); 
  
  constructor(private personalDataServ: PersonalDataService, private router:Router){}
 
  shouldNavigateToHome(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.endsWith('details');
  }

  toggleDetails(): void {
   const detailsOpen = this.personalDataServ.getDetailsOpenValue(); 
    if (detailsOpen) {
      this.personalDataServ.setDetailsOpen(false);
    } 
  }

  openDetailsAndOnForm(): void {
      this.personalDataServ.setDetailsOpen(true);
      this.personalDataServ.setFormSubmit();
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.getIdParam();
    this.getSelectedWorkspace(this.id);
    this.personalDataServ
  }

  ngOnDestroy(): void {
    this.workspaceSub.unsubscribe();
    this.coworkService.selectedWorkspace.next(undefined);
  }

  getIdParam() {
    this._activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.id = params['id'];
      },
      error: (error) => console.log(error),
      complete: () => { }
    });
  }

  getSelectedWorkspace(id: number) {
    this.coworkService.filterWorkspaceById(id);
    this.workspaceSub = this.coworkService.getWorkspaceById().subscribe({
      next: (res: any) => {
        this.workspace = res;
      },
      error: (error: any) => console.log(error),
      complete: () => { }
    });
  }

  next() {
    if (this.displayedImage == this.workspace.images.length - 1) {
      this.displayedImage = 0;
    } else {
      this.displayedImage++
    }
  }

  previous() {
    if (this.displayedImage == 0) {
      this.displayedImage = this.workspace.images.length - 1;
    } else {
      this.displayedImage--;
    }
  }

}
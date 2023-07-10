import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { faArrowLeft, faShareNodes, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { CoworkService } from 'src/app/services/cowork.service';
import { Observable, Subscription } from 'rxjs';

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

  workspace: any;
  workspaceSub: any;
  id: number = 0;

  _activatedRoute = inject(ActivatedRoute);
  coworkService = inject(CoworkService);

  ngOnInit(): void {
    this.getIdParam();
    this.getSelectedWorkspace(this.id);
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
      complete: () => {}
    });
  }

  getSelectedWorkspace(id: number) {
    this.workspaceSub = this.coworkService.getWorkspaceById(id).subscribe({
      next: (res: any) => {
        this.workspace = res;
        console.log(res);
      },
      error: (error: any) => console.log(error),
      complete: () => { }
    });
  }

}

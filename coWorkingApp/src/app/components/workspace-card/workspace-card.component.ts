import { Component, Input } from '@angular/core';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-workspace-card',
  templateUrl: './workspace-card.component.html',
  styleUrls: ['./workspace-card.component.css']
})
export class WorkspaceCardComponent {

  @Input() workspace: any | undefined;

  faUser = faUser;
  faStar = faStar;

  hoverCarousel(id: number) {
    let workspaceThumbnail = document.getElementById(`workspace-thumbnail-${id}`);
    if (workspaceThumbnail) {
      workspaceThumbnail.classList.add('scale-[1.025]');
    }
  }

  clearHover(id: number) {
    let workspaceThumbnail = document.getElementById(`workspace-thumbnail-${id}`);
    if (workspaceThumbnail) {
      workspaceThumbnail.classList.remove('scale-[1.025]');
    }
  }

}

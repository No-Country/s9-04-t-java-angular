import { Component, Input } from '@angular/core';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-workspace-card',
  templateUrl: './workspace-card.component.html',
  styleUrls: ['./workspace-card.component.css'],
  host: {'class': 'flex'}
})
export class WorkspaceCardComponent {

  @Input() workspace: any | undefined;

  faUser = faUser;
  faStar = faStar;
  faHeart = faHeart;

  showFavBtn = false; 

  thumbnail: number = 0;
  hoverCarouselInterval: any | undefined = undefined;

  hoverCarousel(workspace: any) {
    let workspaceThumbnail = document.getElementById(`workspace-thumbnail-${workspace.id}`);
    if (workspaceThumbnail) {
      workspaceThumbnail.classList.add('scale-[1.025]');
      this.hoverCarouselInterval = setInterval(() => {
        if (this.thumbnail === workspace.images.length - 1) {
          this.thumbnail = 0;
        } else {
          this.thumbnail += 1;
        }
      }, 2000);
    }
  }

  clearHover(workspace: any) {
    let workspaceThumbnail = document.getElementById(`workspace-thumbnail-${workspace.id}`);
    if (workspaceThumbnail) {
      workspaceThumbnail.classList.remove('scale-[1.025]');
      this.thumbnail = 0;
      window.clearInterval(this.hoverCarouselInterval);
    }
  }

}

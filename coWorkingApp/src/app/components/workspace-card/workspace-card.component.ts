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

}

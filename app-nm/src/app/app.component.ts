import { Component } from '@angular/core';
import { routerTransition } from './shared/animations/router.animation';
import { RouterStateService } from './state/router-state/router-state.service';

@Component({
  selector: 'nm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {
  currentRouteIndex = -1;

  constructor(private routeService: RouterStateService) {
    routeService.getCurrentPageIndex().subscribe(data => this.currentRouteIndex = data || -1);
  }
}

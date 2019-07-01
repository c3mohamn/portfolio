import { Component, OnDestroy } from '@angular/core';
import { routerTransition } from './shared/animations/router.animation';
import { RouterStateService } from './state/router-state/router-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'nm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  currentRouteIndex = 0;

  constructor(private routeService: RouterStateService) {
    routeService
      .getCurrentPageIndex()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.currentRouteIndex = data;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

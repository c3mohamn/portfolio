import { Component, OnDestroy, OnInit } from '@angular/core';
import { routerTransition } from './shared/animations/router.animation';
import { RouterStateService } from './state/router-state/router-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatCustomIconService } from './shared/services/mat-custom-icon/mat-custom-icon.service';

@Component({
  selector: 'nm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  currentRouteIndex = 0;

  constructor(
    private routeService: RouterStateService,
    private matCustomIconService: MatCustomIconService
  ) {}

  ngOnInit(): void {
    this.routeService
      .getCurrentPageIndex()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.currentRouteIndex = data;
      });

    this.matCustomIconService.addAllCustomIcons();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterStateUrl } from '../modules/state/router-state/router-state.custom-serializer';
import { RouterStateSelector, RouterState } from '../modules/state/router-state/router-state.selector';

@Injectable()
export class RouterStateService {
  constructor(private store: Store<RouterState>) {}

  /**
   * Returns current router state.
   */
  getCurrentState(): Observable<RouterStateUrl> {
    return this.store.select(RouterStateSelector.getState);
  }

  /**
   * Returns current url path.
   */
  getCurrentUrl(): Observable<string> {
    return this.store.select(RouterStateSelector.getCurrentUrl);
  }

  /**
   * Returns title of current page.
   */
  getCurrentPageTitle(): Observable<string> {
    return this.store.select(RouterStateSelector.getCurrentPageTitle);
  }

  /**
   * Returns index of current page.
   */
  getCurrentPageIndex(): Observable<number> {
    return this.store.select(RouterStateSelector.getCurrentPageIndex);
  }

  /**
   * Returns current url params.
   */
  getCurrentParams(): Observable<any> {
    return this.store.select(RouterStateSelector.getCurrentParams);
  }

  /**
   * Returns current url query params.
   */
  getCurrentQueryParams(): Observable<any> {
    return this.store.select(RouterStateSelector.getCurrentParams);
  }
}

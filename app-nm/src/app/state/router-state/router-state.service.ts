import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { RouterStateUrl } from './router-state.custom-serializer';
import { RouterStateSelector, RouterState } from './router-state.selector';

@Injectable()
export class RouterStateService {
  constructor(private actions$: Actions, private store: Store<RouterState>) {}

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
   * Returns title of current page according to app routing.
   */
  getCurrentPageTitle(): Observable<string> {
    return this.store.select(RouterStateSelector.getCurrentPageTitle);
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

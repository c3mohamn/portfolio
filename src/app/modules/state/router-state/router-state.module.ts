import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { RouterStateService } from '../../../services/router-state.service';
import { CustomSerializer } from './router-state.custom-serializer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('router', routerReducer),
    RouterModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: CustomSerializer
    })
  ],
  providers: [RouterStateService, { provide: RouterStateSerializer, useClass: CustomSerializer }]
})
export class RouterStateModule {}

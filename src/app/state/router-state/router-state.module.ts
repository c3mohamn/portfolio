import { NgModule } from '@angular/core';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from '@ngrx/router-store';
import { CustomSerializer } from './router-state.custom-serializer';
import { StoreModule } from '@ngrx/store';
import { RouterStateService } from './router-state.service';
import { RouterModule } from '@angular/router';

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
  providers: [
    RouterStateService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class RouterStateModule {}

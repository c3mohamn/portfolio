import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, State } from './index';
import { RouterStateModule } from './router-state/router-state.module';

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

Object.assign(REDUCERS_TOKEN, reducers);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(REDUCERS_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'Nasir Portfolio'
    }),
    RouterStateModule
  ],
  providers: [{ provide: REDUCERS_TOKEN, useValue: reducers }]
})
export class StateModule {}

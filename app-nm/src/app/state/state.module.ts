import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers, metaReducers, State } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateModule } from './router-state/router-state.module';
import { EffectsModule } from '@ngrx/effects';

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>(
  'Registered Reducers'
);

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

import { RouterStateService } from 'src/app/services/router-state.service';

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { reducers } from '../../state';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MatIconModule, StoreModule.forRoot(reducers)],
        providers: [RouterStateService],
        declarations: [HeaderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showMobileMenu should be false on init', () => {
    expect(component.showMobileMenu).toEqual(false);
  });

  it('showMobileMenu should become true on first toggle', () => {
    component.toggleMobileMenu();
    expect(component.showMobileMenu).toEqual(true);
  });

  it('showMobileMenu should be stay false with false parameter', () => {
    component.toggleMobileMenu(false);
    expect(component.showMobileMenu).toEqual(false);
  });
});

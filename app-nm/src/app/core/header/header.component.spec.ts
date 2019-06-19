import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, AngularSvgIconModule],
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

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

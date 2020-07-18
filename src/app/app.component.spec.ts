import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { reducers } from './modules/state';
import { MatCustomIconService } from './services/mat-custom-icon/mat-custom-icon.service';
import { RouterStateService } from './services/router-state.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, StoreModule.forRoot(reducers), BrowserAnimationsModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
      providers: [RouterStateService, MatCustomIconService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});

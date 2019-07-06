import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterStateService } from './state/router-state/router-state.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCustomIconService } from './shared/services/mat-custom-icon.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AngularSvgIconModule,
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule
      ],
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

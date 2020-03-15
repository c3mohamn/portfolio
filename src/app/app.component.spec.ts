import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCustomIconService } from './services/mat-custom-icon/mat-custom-icon.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './modules/state';
import { FooterComponent } from './modules/core/footer/footer.component';
import { HeaderComponent } from './modules/core/header/header.component';
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

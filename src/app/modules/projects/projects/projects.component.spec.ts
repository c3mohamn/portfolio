import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollDirective } from 'ngx-page-scroll';
import { ProjectComponent } from '../components/project/project.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterStateService } from 'src/app/services/router-state.service';
import { reducers } from '../../state';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule,
        NgxPageScrollCoreModule,
        MatIconModule
      ],
      declarations: [ProjectsComponent, ProjectCardComponent, ProjectComponent, NgxPageScrollDirective],
      providers: [RouterStateService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouterStateService } from '../../../services/router-state.service';

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showMobileMenu = false;
  isSmallScreen = false;
  isScrolledDown = false;
  currentPageTitle = '';
  pages = [
    { name: 'projects', url: '/projects' },
    { name: 'about', url: '/about' },
    { name: 'resume', url: '/resume' },
    { name: 'contact', url: '/contact' }
  ];
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private router: Router, private routeService: RouterStateService) {}

  ngOnInit() {
    this.routeService
      .getCurrentPageTitle()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        if (data) {
          this.currentPageTitle = data.toLowerCase();
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  @HostListener('body:scroll', ['$event.srcElement.scrollTop'])
  onScroll(scrollOffset: number) {
    // scroll down past content, change header style
    if (scrollOffset > 100) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }

  navigate(page: string): void {
    this.router.navigate([page]);
    this.toggleMobileMenu(false);
  }

  toggleMobileMenu(toggle?: boolean): void {
    if (toggle !== undefined) {
      this.showMobileMenu = toggle;
    } else {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}

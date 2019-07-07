import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router } from '@angular/router';
import { RouterStateService } from 'src/app/state/router-state/router-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
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
  isBrowser: boolean;

  constructor(
    private router: Router,
    private routeService: RouterStateService,
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.scroll, true);
    }

    this.routeService
      .getCurrentPageTitle()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        if (data) {
          this.currentPageTitle = data.toLowerCase();
        }
      });
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.scroll, true);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  scroll = (event: any): void => {
    const scrollOffset = event.srcElement.scrollTop;
    // scroll down past content, change header style
    if (scrollOffset > 100) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  };

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

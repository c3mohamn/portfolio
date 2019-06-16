import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showMobileMenu = false;
  isSmallScreen = false;
  isScrolledDown = false;

  constructor(private router: Router) {
    this.onWindowResize();
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
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

  @HostListener('window:resize', ['$event'])
  onWindowResize($event?: any) {
    const screenWidth = window.innerWidth;

    // Close mobile menu when screen size is greater than medium width
    if (screenWidth > 640) {
      this.toggleMobileMenu(false);
      this.isSmallScreen = false;
    } else {
      this.isSmallScreen = true;
    }
  }

}

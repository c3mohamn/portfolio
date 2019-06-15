import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMobileMenu = false;

  constructor(private router: Router) { }

  ngOnInit() {
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

  @HostListener('window:resize', ['$event'])
  listenScreenSize(event?: any) {
    const screenWidth = window.innerWidth;

    // Close mobile menu when screen size is greater than medium width
    if (screenWidth > 640) {
      this.toggleMobileMenu(false);
    }
  }
}

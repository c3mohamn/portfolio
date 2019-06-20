import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'nm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHerokuDomain = false;
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
    const fullPath = this.document.location.href;
    if (fullPath.toLowerCase().includes('herokuapp')) {
      this.isHerokuDomain = true;
    }
  }
}

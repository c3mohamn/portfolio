import { Component, OnInit } from '@angular/core';
import { iconList } from 'src/app/shared/data/about-icon-list';

@Component({
  selector: 'nm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  iconList = iconList;

  constructor() { }

  ngOnInit() {
  }
}

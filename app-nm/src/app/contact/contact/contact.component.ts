import { Component, OnInit } from '@angular/core';
import { SocialMediaLink } from 'src/app/shared/models/social-media.model';
import { socialMedia } from 'src/app/shared/data/footer-social-media-list';

@Component({
  selector: 'nm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  socialMediaList: SocialMediaLink[] = socialMedia;

  constructor() {}

  ngOnInit() {}
}

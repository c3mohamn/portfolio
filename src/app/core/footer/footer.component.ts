import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SocialMediaLink } from 'src/app/shared/models/social-media.model';
import { socialMedia } from 'src/app/shared/data/footer-social-media-list';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'nm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaList: SocialMediaLink[] = socialMedia;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {}
}

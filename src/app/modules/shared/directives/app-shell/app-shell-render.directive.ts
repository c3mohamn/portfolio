import { isPlatformServer } from '@angular/common';
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appShellRender]'
})
export class AppShellRenderDirective implements OnInit {
  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>, @Inject(PLATFORM_ID) private platformId) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

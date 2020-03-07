import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appShellRender]'
})
export class AppShellRenderDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

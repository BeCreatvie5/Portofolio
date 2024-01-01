import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from  'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        // AOS configurations
      });
    }
  }
}

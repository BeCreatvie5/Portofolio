import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrl: './achivements.component.scss'
})
export class AchivementsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        // AOS configurations
      });
    }
  }

}

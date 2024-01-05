import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-scrollanimation',
  templateUrl: './scrollanimation.component.html',
  styleUrl: './scrollanimation.component.scss'
})
export class ScrollanimationComponent implements OnInit,AfterViewInit {
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
  items = [
    { name: 'Reading Books', imageUrl: 'assets/images/reading.jpg', showImage: false },
    { name: 'Music', imageUrl: 'assets/images/music.jpg', showImage: false },
    { name: 'Watching Anime', imageUrl: 'assets/images/Watching Anime.jpg', showImage: false },
  ];
  items2=[
    { name: 'Travelling', imageUrl: 'assets/images/travelling.jpg', showImage: false },
    { name: 'Learning new Technlogies', imageUrl: 'assets/images/tech.jpg', showImage: false },
    { name: 'Exploring', imageUrl: 'assets/images/explore.jpg', showImage: false },
  ]
  items3=[
    { name: 'Angular', imageUrl: 'assets/images/travelling.jpg', showImage: false },
    { name: 'HTML', imageUrl: 'assets/images/tech.jpg', showImage: false },
    { name: 'SCSS', imageUrl: 'assets/images/explore.jp g', showImage: false },
    { name: 'TypeScript', imageUrl: 'assets/images/explore.jp g', showImage: false },
    { name: 'Bootstrap', imageUrl: 'assets/images/explore.jp g', showImage: false },
  ]
  hoveredItem: any;

  showImage(item: any): void {
    this.hideImage(); // Hide any previous image
    item.showImage = true;
    this.hoveredItem = item;
  }

  hideImage(): void {
    if (this.hoveredItem) {
      this.hoveredItem.showImage = false;
      this.hoveredItem = null;
    }
  }
}


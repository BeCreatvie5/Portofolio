import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import { Certifications } from '../shared/certifications.model';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrl: './achivements.component.scss'
})
export class AchivementsComponent implements AfterViewInit {
  certifications!:Certifications[];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, public certificationService:CertificationService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        // AOS configurations
      });
    }
    this.certificationService.getCertification().subscribe((certification)=>{
      this.certifications=certification;
    })
  }

}

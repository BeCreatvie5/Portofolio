import { Injectable } from '@angular/core';
import { Certifications } from '../shared/certifications.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  certification:Certifications[]=[
    new Certifications(
      'https://jmp.sh/Mx0wP9lW',
      'angular.png'
    ),
    new Certifications(
      'https://jumpshare.com/v/q74GBLpaLHWAGHxFZ5Ab',
      'fastapi.png'
    ),
    new Certifications(
      'https://jmp.sh/weE8HGC6',
      'fastapi_using_ML.png'
    ),
    new Certifications(
      'https://jumpshare.com/v/3vIE2ITGMRcHmEIbyckC',
      'NNN.png'
    ),
    new Certifications(
      'https://jmp.sh/MgfpvQaW',
      'hexnbit.png'
    ),
    new Certifications(
      'https://jmp.sh/GQsMF5cG',
      'foundation.png'
    ),
    new Certifications(
      'https://jmp.sh/vKgPOhP3',
      'ascendo.png'
    ),
    new Certifications(
      'https://jmp.sh/XdfvFchw',
      'python.png'
    ),
  ]
  constructor() { }
  getCertification():Observable<Certifications[]>{
    return of(this.certification);
  }
  getImagePath(imageFileName:string):string{
    return `assets/images/${imageFileName}`;
  }
}

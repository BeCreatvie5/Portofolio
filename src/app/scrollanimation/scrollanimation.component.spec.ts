import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollanimationComponent } from './scrollanimation.component';

describe('ScrollanimationComponent', () => {
  let component: ScrollanimationComponent;
  let fixture: ComponentFixture<ScrollanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollanimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

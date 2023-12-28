import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBtnComponent } from './base-btn.component';

describe('BaseBtnComponent', () => {
  let component: BaseBtnComponent;
  let fixture: ComponentFixture<BaseBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

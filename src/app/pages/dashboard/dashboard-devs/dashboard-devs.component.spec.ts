import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDevsComponent } from './dashboard-devs.component';

describe('DashboardDevsComponent', () => {
  let component: DashboardDevsComponent;
  let fixture: ComponentFixture<DashboardDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDevsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

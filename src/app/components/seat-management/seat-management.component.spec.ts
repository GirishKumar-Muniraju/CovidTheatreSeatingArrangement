import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatManagementComponent } from './seat-management.component';

describe('TicketBookingComponent', () => {
  let component: SeatManagementComponent;
  let fixture: ComponentFixture<SeatManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatManagementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

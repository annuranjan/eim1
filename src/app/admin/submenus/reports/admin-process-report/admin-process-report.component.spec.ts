import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcessReportComponent } from './admin-process-report.component';

describe('AdminProcessReportComponent', () => {
  let component: AdminProcessReportComponent;
  let fixture: ComponentFixture<AdminProcessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProcessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProcessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

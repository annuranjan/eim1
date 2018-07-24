import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProcessReportComponent } from './employee-process-report.component';

describe('EmployeeProcessReportComponent', () => {
  let component: EmployeeProcessReportComponent;
  let fixture: ComponentFixture<EmployeeProcessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeProcessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProcessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

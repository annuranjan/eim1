import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProcessReportComponent } from './manager-process-report.component';

describe('ManagerProcessReportComponent', () => {
  let component: ManagerProcessReportComponent;
  let fixture: ComponentFixture<ManagerProcessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProcessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProcessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

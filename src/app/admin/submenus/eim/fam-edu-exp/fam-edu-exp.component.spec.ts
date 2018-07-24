import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamEduExpComponent } from './fam-edu-exp.component';

describe('FamEduExpComponent', () => {
  let component: FamEduExpComponent;
  let fixture: ComponentFixture<FamEduExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamEduExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamEduExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

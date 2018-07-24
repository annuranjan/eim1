import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EimComponent } from './eim.component';

describe('EimComponent', () => {
  let component: EimComponent;
  let fixture: ComponentFixture<EimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

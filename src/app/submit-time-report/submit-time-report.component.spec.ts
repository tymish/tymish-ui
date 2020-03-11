import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTimeReportComponent } from './submit-time-report.component';

describe('SubmitTimeReportComponent', () => {
  let component: SubmitTimeReportComponent;
  let fixture: ComponentFixture<SubmitTimeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitTimeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

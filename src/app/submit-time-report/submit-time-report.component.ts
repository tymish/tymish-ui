import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-submit-time-report',
  templateUrl: './submit-time-report.component.html',
  styleUrls: ['./submit-time-report.component.scss']
})
export class SubmitTimeReportComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  public timeReportForm: FormGroup;

  ngOnInit(): void {
    this.timeReportForm = this.builder.group({
      timeReportId: '',
      timeEntries: this.builder.array([
        this.builder.group({
          start: this.builder.control(''),
          end: this.builder.control('')
        })
      ])
    })
  }

  get timeEntries() {
    return this.timeReportForm.get('timeEntries') as FormArray;
  }

  addTimeEntry() {
    this.timeEntries.push(this.builder.group({
      start: this.builder.control(''),
      end: this.builder.control('')
    }));
  }

  removeTimeEntry(index: number) {
    this.timeEntries.removeAt(index);
  }
}

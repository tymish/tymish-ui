import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { TimeReportsService } from '../core/api/services';
import { TimeEntry } from '../core/api/models';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { TIMEOUT } from 'dns';

@Component({
  selector: 'app-submit-time-report',
  templateUrl: './submit-time-report.component.html',
  styleUrls: ['./submit-time-report.component.scss']
})
export class SubmitTimeReportComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private service: TimeReportsService,
    private route: ActivatedRoute
  ) { }
  public timeReportId: string;
  public timeReportForm: FormGroup;

  ngOnInit(): void {
    this.route.params
      .pipe(map(p => p.id))
      .subscribe(id => this.timeReportId = id);

    this.timeReportForm = this.builder.group({
      timeEntries: this.builder.array([
        this.builder.group({
          date: this.builder.control(''),
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
      date: this.builder.control(''),
      start: this.builder.control(''),
      end: this.builder.control('')
    }));
  }

  removeTimeEntry(index: number) {
    this.timeEntries.removeAt(index);
  }

  submitTimeReport() {
    const id = this.timeReportId;
    const timeEntries = this.map(this.timeEntries);
    console.log(`${id}, ${timeEntries}`);

    this.service.submitTimeReport({
      body: {
        timeReportId: id, timeEntries: timeEntries
      }
    }).subscribe();
  }

  map(timeEntries: FormArray): TimeEntry[] {
    return timeEntries.controls.map(entry => {
      const dateString = moment(entry.get('date').value).format('YYYY-MM-DD');
      const start = `${dateString}T${entry.get('start').value}`;
      const end = `${dateString}T${entry.get('end').value}`;
      return {
        start: start,
        end: end
      } as TimeEntry;
    })
  }
}

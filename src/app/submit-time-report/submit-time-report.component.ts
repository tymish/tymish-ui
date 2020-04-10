import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import * as moment from 'moment';
import {TimeReportsService, EmployeesService} from '../core/api/services';
import {TimeEntry, Employee} from '../core/api/models';
import {Observable, of, forkJoin} from 'rxjs';

export interface State {
  timeReportId: string;
  employee: Employee;
}

@Component({
  selector: 'app-submit-time-report',
  templateUrl: './submit-time-report.component.html',
  styleUrls: ['./submit-time-report.component.scss']
})
export class SubmitTimeReportComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private timeReports: TimeReportsService,
    private route: ActivatedRoute
  ) {}
  public state$: Observable<State>;
  public timeReportForm: FormGroup;

  ngOnInit(): void {
    const id$ = this.route.params.pipe(map((p) => p.id as string));

    this.state$ = id$.pipe(
      switchMap((id) =>
        forkJoin(of(id), this.timeReports.getEmployeeByTimeReportId({id: id}))
      ),
      map((result) => ({timeReportId: result[0], employee: result[1]} as State))
    );

    this.timeReportForm = this.builder.group({
      timeEntries: this.builder.array([
        this.builder.group({
          date: this.builder.control(''),
          start: this.builder.control(''),
          end: this.builder.control('')
        })
      ])
    });
  }

  get timeEntries() {
    return this.timeReportForm.get('timeEntries') as FormArray;
  }

  addTimeEntry() {
    this.timeEntries.push(
      this.builder.group({
        date: this.builder.control(''),
        start: this.builder.control(''),
        end: this.builder.control('')
      })
    );
  }

  removeTimeEntry(index: number) {
    this.timeEntries.removeAt(index);
  }

  submitTimeReport(id: string) {
    const timeEntries = this.map(this.timeEntries);
    console.log(`${id}, ${timeEntries}`);

    this.timeReports
      .submitTimeReport({
        body: {
          timeReportId: id,
          timeEntries: timeEntries
        }
      })
      .subscribe();
  }

  map(timeEntries: FormArray): TimeEntry[] {
    return timeEntries.controls.map((entry) => {
      const dateString = moment(entry.get('date').value).format('YYYY-MM-DD');
      const start = `${dateString}T${entry.get('start').value}`;
      const end = `${dateString}T${entry.get('end').value}`;
      return {
        start: start,
        end: end
      } as TimeEntry;
    });
  }
}

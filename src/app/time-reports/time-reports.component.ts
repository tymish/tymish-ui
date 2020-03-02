import { Component, OnInit } from '@angular/core';
import { TimeReportsService } from '../core/api/services';
import { TimeReportSummary } from '../core/api/models';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-time-reports',
  templateUrl: './time-reports.component.html',
  styleUrls: ['./time-reports.component.scss']
})
export class TimeReportsComponent implements OnInit {
  public thisMonthSummary$: Observable<TimeReportSummary>;
  public previousMonthsReports$: Observable<TimeReportSummary[]>;

  constructor(private service: TimeReportsService) { }

  ngOnInit(): void {
    this.thisMonthSummary$ = this.getTimeReportSummary(new Date());
    this.previousMonthsReports$ = this.getPreviousMonthsTimeReports(3);
  }

  getPreviousMonthsTimeReports(monthsToFetch: number)  {
    let timeReportArrays = [] as Observable<TimeReportSummary>[];
    for (let i = 1; i <= monthsToFetch; i++) {
      const lastMonth = moment().subtract('months', i).toDate();
      timeReportArrays.push(this.getTimeReportSummary(lastMonth))
    }
    return forkJoin(timeReportArrays);
  }

  getTimeReportSummary(date: Date) {
    return this.service.getSummary({
      month: date.getMonth(),
      year: date.getFullYear()
    });
  }

  formatMonth(month: number) {
    return moment.months(month);
  }
}

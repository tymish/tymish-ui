import { Component, OnInit } from '@angular/core';
import { TimeReportsService } from '../core/api/services';
import { MonthlyAggregateDto } from '../core/api/models';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-time-reports',
  templateUrl: './time-reports.component.html',
  styleUrls: ['./time-reports.component.scss']
})
export class TimeReportsComponent implements OnInit {
  public thisMonthSummary$: Observable<MonthlyAggregateDto>;
  public previousMonthsReports$: Observable<MonthlyAggregateDto[]>;

  constructor(private service: TimeReportsService) { }

  ngOnInit(): void {
    this.thisMonthSummary$ = this.getTimeReportSummary(new Date());
    this.previousMonthsReports$ = this.getPreviousMonthsTimeReports(3);
  }

  getPreviousMonthsTimeReports(monthsToFetch: number) {
    const timeReportArrays = [] as Observable<MonthlyAggregateDto>[];
    for (let i = 1; i <= monthsToFetch; i++) {
      const lastMonth = moment().subtract(i, 'months').toDate();
      timeReportArrays.push(this.getTimeReportSummary(lastMonth))
    }
    return forkJoin(timeReportArrays);
  }

  getTimeReportSummary(date: Date) {
    return this.service.getMonthAggregate({
      month: date.toLocaleDateString()
    });
  }

  getDate(date: string): moment.Moment {
    return moment(date);
  }

  requestTimeReports(date: string) {
    this.service.issueTimeReports({ body: { issued: date } }).subscribe();
  }
}

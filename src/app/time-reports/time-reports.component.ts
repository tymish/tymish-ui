import {Component, OnInit} from '@angular/core';
import {TimeReportsService} from '../core/api/services';
import {MonthAggregateDto} from '../core/api/models';
import * as moment from 'moment';
import {Observable, forkJoin} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-time-reports',
  templateUrl: './time-reports.component.html',
  styleUrls: ['./time-reports.component.scss']
})
export class TimeReportsComponent implements OnInit {
  public selectedYear = 2020;
  public monthAggregates$: Observable<MonthAggregateDto[]>;

  constructor(private service: TimeReportsService) {}

  ngOnInit(): void {
    this.monthAggregates$ = this.getMonthAggregate(this.selectedYear);
  }

  getMonthAggregate(year: number) {
    return this.service.getMonthAggregate({
      year: year
    });
  }

  goToSummary(aggregate: MonthAggregateDto) {
    const thisMonth = moment(aggregate.payPeriod);
    const routes = [thisMonth.year(), thisMonth.format('MM'), 'summary'];
    return routes;
  }

  updateData(year: number) {
    this.monthAggregates$ = this.getMonthAggregate(year);
  }

  sendTimeReports(date: string) {
    this.service.sendTimeReports({body: {sent: date}}).subscribe();
  }

  percentDone(done: number, total: number) {
    if (done === 0) return 0;
    if (done === total) return 100;
    return ((total - done) / total) * 100;
  }
}

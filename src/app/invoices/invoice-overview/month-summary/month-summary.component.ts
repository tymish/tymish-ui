import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TimeReportsService} from 'src/app/core/api/services';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {EmployeeTimeReportAggregateDto} from 'src/app/core/api/models';

@Component({
  selector: 'app-month-summary',
  templateUrl: './month-summary.component.html',
  styleUrls: ['./month-summary.component.scss']
})
export class MonthSummaryComponent implements OnInit {
  public year: number;
  public month: number;
  public aggregates$: Observable<EmployeeTimeReportAggregateDto[]>;

  constructor(
    private route: ActivatedRoute,
    private service: TimeReportsService
  ) {}

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.year = +snapshot.params.year;
    this.month = +snapshot.params.month;

    this.aggregates$ = this.service.getEmployeeTimeReportAggregates({
      month: this.toDateString(this.year, this.month)
    });
  }

  toDateString(year: number, month: number) {
    return moment(`${year}-${month}`, 'YYYY-MM').toISOString();
  }

  monthNumberToString(month: number) {
    return moment(month, 'M').format('MMMM');
  }
}

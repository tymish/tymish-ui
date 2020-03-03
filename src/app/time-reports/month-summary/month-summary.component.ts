import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeReportsService } from 'src/app/core/api/services';
import * as moment from 'moment';

@Component({
  selector: 'app-month-summary',
  templateUrl: './month-summary.component.html',
  styleUrls: ['./month-summary.component.scss']
})
export class MonthSummaryComponent implements OnInit {
  public year: number;
  public month: string;

  constructor(
    private route: ActivatedRoute,
    private service: TimeReportsService) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.year = +snapshot.params['year'];
    this.month = snapshot.params['month'];

    const monthNumber = +moment().month(this.month).format('M');
    this.service.getTimeReportsByIssuedMonth({
      month: monthNumber, year: this.year
    }).subscribe(res => console.log(res));
  }
}

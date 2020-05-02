import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import {InvoicesService} from '../../core/api/services';
import {MonthAggregateDto} from '../../core/api/models';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit {
  public selectedYear = 2020;
  public monthAggregates$: Observable<MonthAggregateDto[]>;

  constructor(private service: InvoicesService) {}

  ngOnInit(): void {
    this.monthAggregates$ = this.getMonthAggregate(this.selectedYear);
  }

  getMonthAggregate(year: number) {
    return this.service.getMonthAggregate({
      year: year
    });
  }

  summaryRoutes(aggregate: MonthAggregateDto) {
    const thisMonth = moment(aggregate.payPeriod);
    const routes = [thisMonth.year(), thisMonth.format('M'), 'summary'];
    return routes;
  }

  updateData(year: number) {
    this.monthAggregates$ = this.getMonthAggregate(year);
  }

  sendInvoices(date: string) {
    this.service.sendInvoices({body: {sent: date}}).subscribe();
  }

  percentDone(done: number, total: number) {
    if (done === 0) return 0;
    if (done === total) return 100;
    return ((total - done) / total) * 100;
  }
}

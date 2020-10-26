import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InvoiceDto, InvoiceStatus} from '../core/api/models';
import {InvoicesService} from '../core/api/services';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  constructor(private readonly service: InvoicesService) {}

  submittedInvoices$: Observable<InvoiceDto[]>;
  paidInvoices$: Observable<InvoiceDto[]>;

  ngOnInit(): void {
    this.submittedInvoices$ = this.service.listInvoices({
      status: InvoiceStatus.Submitted
    });

    this.paidInvoices$ = this.service.listInvoices({
      status: InvoiceStatus.Paid
    });
  }
}

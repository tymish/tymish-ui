import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {InvoiceDto} from 'src/app/core/api/models';
import {InvoicesService} from 'src/app/core/api/services';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly invoices: InvoicesService
  ) {}
  invoice$: Observable<InvoiceDto>;

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.params['id'];
    this.invoice$ = this.invoices.getInvoiceById({id: invoiceId});
  }
}

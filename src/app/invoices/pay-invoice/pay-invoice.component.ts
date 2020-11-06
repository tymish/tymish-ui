import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {InvoiceDto} from 'src/app/core/api/models';
import {InvoicesService} from 'src/app/core/api/services';

@Component({
  selector: 'app-pay-invoice',
  templateUrl: './pay-invoice.component.html',
  styleUrls: ['./pay-invoice.component.scss']
})
export class PayInvoiceComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: InvoicesService
  ) {}

  invoiceId: string;
  invoice$: Observable<InvoiceDto>;

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.params['id'];
    this.invoice$ = this.service.getInvoiceById({id: this.invoiceId});
  }

  payInvoice(amount: number, reference: string) {
    this.service
      .payInvoice({
        body: {
          invoiceId: this.invoiceId,
          paymentAmount: amount,
          paymentReference: reference
        }
      })
      .subscribe();
  }
}

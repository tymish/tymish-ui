import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private readonly router: Router,
    private readonly service: InvoicesService
  ) {}

  invoice$: Observable<InvoiceDto>;

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.params['id'];
    this.invoice$ = this.service.getInvoiceById({id: invoiceId});
  }

  payInvoice(id: string, amount: number, reference: string) {
    this.service
      .payInvoice({
        body: {
          invoiceId: id,
          paymentAmount: amount,
          paymentReference: reference
        }
      })
      .subscribe(() => this.router.navigate(['invoices']));
  }
}

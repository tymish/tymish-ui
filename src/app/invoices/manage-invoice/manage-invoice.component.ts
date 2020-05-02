import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Invoice} from '../../core/api/models';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {InvoicesService} from '../../core/api/services';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-manage-invoice',
  templateUrl: './manage-invoice.component.html',
  styleUrls: ['./manage-invoice.component.scss']
})
export class ManageInvoiceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: InvoicesService,
    private builder: FormBuilder
  ) {}

  public invoice$: Observable<Invoice>;
  form = this.builder.group({eTransferReference: this.builder.control('')});

  ngOnInit(): void {
    const id$ = this.route.params.pipe(map((p) => p.id as string));
    this.invoice$ = id$.pipe(
      switchMap((id) => this.service.getInvoiceById({id: id}))
    );
  }

  submitLink(id: string) {
    return `https://127.0.0.1:4200/submit-invoice/${id}`;
  }

  markAsPaid(id: string) {
    const reference = this.form.get('eTransferReference').value;
    this.service
      .payInvoice({
        body: {
          id: id,
          reference: reference
        }
      })
      .subscribe();
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../mat.module';

import {InvoiceOverviewComponent} from './invoice-overview/invoice-overview.component';
import {InvoicesRoutingModule} from './invoices-routing.module';
import {MonthSummaryComponent} from './invoice-overview/month-summary/month-summary.component';
import {ManageInvoiceComponent} from './manage-invoice/manage-invoice.component';

@NgModule({
  declarations: [
    InvoiceOverviewComponent,
    MonthSummaryComponent,
    ManageInvoiceComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    InvoicesRoutingModule
  ],
  providers: []
})
export class InvoicesModule {}

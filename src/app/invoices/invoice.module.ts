import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../mat.module';

import {InvoiceOverviewComponent} from './invoice-overview/invoice-overview.component';
import {TimeReportsRoutingModule} from './invoices-routing.module';
import {MonthSummaryComponent} from './invoice-overview/month-summary/month-summary.component';
import {SubmitInvoiceComponent} from './submit-invoice/submit-invoice.component';
import {ManageInvoiceComponent} from './manage-invoice/manage-invoice.component';

@NgModule({
  declarations: [
    InvoiceOverviewComponent,
    MonthSummaryComponent,
    SubmitInvoiceComponent,
    ManageInvoiceComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    TimeReportsRoutingModule
  ],
  providers: []
})
export class TimeReportsModule {}

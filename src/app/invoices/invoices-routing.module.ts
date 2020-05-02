import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InvoiceOverviewComponent} from './invoice-overview/invoice-overview.component';
import {MonthSummaryComponent} from './invoice-overview/month-summary/month-summary.component';
import {ManageInvoiceComponent} from './manage-invoice/manage-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceOverviewComponent
  },
  {
    path: ':year/:month/summary',
    component: MonthSummaryComponent
  },
  {
    path: ':id',
    component: ManageInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {}

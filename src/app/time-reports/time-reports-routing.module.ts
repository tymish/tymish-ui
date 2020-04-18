import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TimeReportsComponent} from './time-reports/time-reports.component';
import {MonthSummaryComponent} from './time-reports/month-summary/month-summary.component';
import {ManageTimeReportComponent} from './manage-time-report/manage-time-report.component';

const routes: Routes = [
  {
    path: '',
    component: TimeReportsComponent
  },
  {
    path: ':year/:month/summary',
    component: MonthSummaryComponent
  },
  {
    path: ':id',
    component: ManageTimeReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeReportsRoutingModule {}

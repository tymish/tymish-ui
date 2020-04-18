import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../mat.module';

import {TimeReportsComponent} from './time-reports/time-reports.component';
import {TimeReportsRoutingModule} from './time-reports-routing.module';
import {MonthSummaryComponent} from './time-reports/month-summary/month-summary.component';
import {SubmitTimeReportComponent} from './submit-time-report/submit-time-report.component';
import {ManageTimeReportComponent} from './manage-time-report/manage-time-report.component';

@NgModule({
  declarations: [
    TimeReportsComponent,
    MonthSummaryComponent,
    SubmitTimeReportComponent,
    ManageTimeReportComponent
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

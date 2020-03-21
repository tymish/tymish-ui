import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './core/api/api.module';
import { MatModule } from './mat.module';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { ManageEmployeeComponent } from './employees/manage-employee/manage-employee.component';
import { TimeReportsComponent } from './time-reports/time-reports.component';
import { MonthSummaryComponent } from './time-reports/month-summary/month-summary.component';
import { SubmitTimeReportComponent } from './submit-time-report/submit-time-report.component';
import { ManageTimeReportComponent } from './manage-time-report/manage-time-report.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent,
    TimeReportsComponent,
    MonthSummaryComponent,
    SubmitTimeReportComponent,
    ManageTimeReportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:5001' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

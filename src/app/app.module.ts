import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './core/api/api.module';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { ManageEmployeeComponent } from './employees/manage-employee/manage-employee.component';
import { TimeReportsComponent } from './time-reports/time-reports.component';
import { MonthSummaryComponent } from './time-reports/month-summary/month-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent,
    TimeReportsComponent,
    MonthSummaryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:5001' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

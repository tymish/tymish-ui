import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {ApiModule} from './core/api/api.module';
import {MatModule} from './mat.module';

import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {AddEmployeeComponent} from './employees/add-employee/add-employee.component';
import {ManageEmployeeComponent} from './employees/manage-employee/manage-employee.component';
import {TimeReportsComponent} from './time-reports/time-reports.component';
import {MonthSummaryComponent} from './time-reports/month-summary/month-summary.component';
import {SubmitTimeReportComponent} from './submit-time-report/submit-time-report.component';
import {ManageTimeReportComponent} from './manage-time-report/manage-time-report.component';
import {ToolbarComponent} from './toolbar/toolbar.component';

import {environment} from 'src/environments/environment';

// NGRX
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import {reducer} from './store/reducers/employee.reducer';
import {EmployeeEffect} from './store/effects/employee.effect';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent,
    TimeReportsComponent,
    MonthSummaryComponent,
    SubmitTimeReportComponent,
    ManageTimeReportComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    ApiModule.forRoot({rootUrl: environment.api}),
    StoreModule.forRoot({employees: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([EmployeeEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

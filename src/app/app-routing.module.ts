import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {AddEmployeeComponent} from './employees/add-employee/add-employee.component';
import {ManageEmployeeComponent} from './employees/manage-employee/manage-employee.component';
import {TimeReportsComponent} from './time-reports/time-reports.component';
import {MonthSummaryComponent} from './time-reports/month-summary/month-summary.component';
import {SubmitTimeReportComponent} from './submit-time-report/submit-time-report.component';
import {ManageTimeReportComponent} from './manage-time-report/manage-time-report.component';
import {LoginComponent} from './core/auth/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {
    path: 'employees/:employeeNumber/manage',
    component: ManageEmployeeComponent
  },
  {path: 'time-reports', component: TimeReportsComponent},
  // Future use this to select mat-drawers that appear on the right
  {
    path: 'employees/:employeeNumber/time-sheets',
    redirectTo: 'employees/:employeeNumber'
  },
  {path: 'time-reports/:year/:month/summary', component: MonthSummaryComponent},
  {path: 'time-reports/:id', component: ManageTimeReportComponent},
  // also available to anonymous
  {path: 'submit-time-report', component: SubmitTimeReportComponent},
  {path: 'submit-time-report/:id', component: SubmitTimeReportComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

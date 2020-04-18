import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {AddEmployeeComponent} from './employees/add-employee/add-employee.component';
import {ManageEmployeeComponent} from './employees/manage-employee/manage-employee.component';
import {SubmitTimeReportComponent} from './time-reports/submit-time-report/submit-time-report.component';
import {LoginComponent} from './core/auth/login.component';
import {LoggedOutComponent} from './core/auth/logged-out.component';
import {AuthGuard} from './core/auth/auth.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  // Default page...
  {path: '', component: HomeComponent},

  // Main App
  {path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard]},
  {
    path: 'employees/add',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employees/:employeeNumber/manage',
    component: ManageEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'time-reports',
    loadChildren: () =>
      import('./time-reports/time-reports.module').then(
        (m) => m.TimeReportsModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'employees/:employeeNumber/time-sheets',
    redirectTo: 'employees/:employeeNumber',
    canActivate: [AuthGuard]
  },

  // Available to Anonymous
  {path: 'submit-time-report', component: SubmitTimeReportComponent},
  {path: 'submit-time-report/:id', component: SubmitTimeReportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logged-out', component: LoggedOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

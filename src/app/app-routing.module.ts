import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubmitTimeReportComponent} from './time-reports/submit-time-report/submit-time-report.component';
import {LoginComponent} from './core/auth/login.component';
import {LoggedOutComponent} from './core/auth/logged-out.component';
import {AuthGuard} from './core/auth/auth.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'submit-time-report', component: SubmitTimeReportComponent},
  {path: 'submit-time-report/:id', component: SubmitTimeReportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logged-out', component: LoggedOutComponent},

  // Feature Modules
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'time-reports',
    loadChildren: () =>
      import('./time-reports/time-reports.module').then(
        (m) => m.TimeReportsModule
      ),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

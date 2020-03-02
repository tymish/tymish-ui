import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { ManageEmployeeComponent } from './employees/manage-employee/manage-employee.component';
import { TimeReportsComponent } from './time-reports/time-reports.component';


const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/:employeeNumber/manage', component: ManageEmployeeComponent },
  // Future use this to select tab in the <employee-shelf>
  { path: 'employees/:employeeNumber/time-sheets', redirectTo: 'employees/:employeeNumber'},
  { path: 'time-reports', component: TimeReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

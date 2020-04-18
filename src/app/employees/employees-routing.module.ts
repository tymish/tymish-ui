import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {ManageEmployeeComponent} from './manage-employee/manage-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: ':employeeNumber/manage',
    component: ManageEmployeeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}

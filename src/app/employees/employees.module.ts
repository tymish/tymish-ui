import {NgModule} from '@angular/core';
import {EmployeesRoutingModule} from './employees-routing.module';
import {EmployeesComponent} from './employees.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {ManageEmployeeComponent} from './manage-employee/manage-employee.component';
import {CommonModule} from '@angular/common';
import {MatModule} from '../mat.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeesComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ],
  exports: []
})
export class EmployeesModule {}

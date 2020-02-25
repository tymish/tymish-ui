import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';


const routes: Routes = [
  { path: "", redirectTo: "/employees", pathMatch: "full" },
  { path: "employees", component: EmployeesComponent },
  { path: "employees/add", component: AddEmployeeComponent },
  { path: "employees/update/:employeeNumber", component: UpdateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

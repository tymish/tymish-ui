import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../core/api/services';
import { Employee, DeleteEmployeeCommand, UpdateEmployeeCommand } from '../core/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public employees$: Observable<Employee[]>;

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.employees$ = this.service.getEmployeeList();
  }

  delete(employeeNumber: number): void {
    const command: DeleteEmployeeCommand = { employeeNumber: employeeNumber };
    this.service.deleteEmployee({ body: command }).subscribe();
  }
}

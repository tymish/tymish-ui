import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/api/services';
import { Employee } from '../core/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public employees$: Observable<Employee[]>;

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.service.employeeGet();
  }
}

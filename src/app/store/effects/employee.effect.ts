import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { createEffect, Actions, ofType } from '@ngrx/effects'
import * as EmployeeActions from '../actions/employee.action';

import { EmployeesService } from '../../core/api/services/employees.service';
import { CreateEmployeeCommand } from '../../core/api/models/create-employee-command';

@Injectable()
export class EmployeeEffect {

  addEmployee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.addEmployee),
      map((action) => {
        this.employeeService.createEmployee({ body: action.employee as CreateEmployeeCommand });
        return EmployeeActions.loadEmployees();
      })
    );
  });

  constructor(
    private actions$: Actions,
    private employeeService: EmployeesService
  ) { }
}

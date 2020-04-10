import {Injectable} from '@angular/core';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {createEffect, Actions, ofType} from '@ngrx/effects';
import * as EmployeeActions from '../actions/employee.action';

import {EmployeesService} from '../../core/api/services/employees.service';
import {CreateEmployeeCommand} from '../../core/api/models/create-employee-command';
import {EMPTY} from 'rxjs';

@Injectable()
export class EmployeeEffect {
  fetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.getEmployees),
      mergeMap(() =>
        this.employeeService.getEmployeeList().pipe(
          map((employees) => ({
            type: EmployeeActions.employeesLoaded.type,
            employees: employees,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.addEmployee),
      mergeMap((action) => {
        const param = {body: action.employee as CreateEmployeeCommand};
        return this.employeeService.createEmployee(param).pipe(
          map((employee) => ({
            type: EmployeeActions.employeeAdded.type,
            employee: employee,
          })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeesService
  ) {}
}

import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';

import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError, tap} from 'rxjs/operators';

import {EmployeesService} from '../../core/api/services/employees.service';
import {CreateEmployeeCommand} from '../../core/api/models/create-employee-command';
import {
  UpdateEmployeeCommand,
  DeleteEmployeeCommand
} from 'src/app/core/api/models';

import * as EmployeeActions from '../actions/employee.action';
import {Router} from '@angular/router';

@Injectable()
export class EmployeeEffect {
  getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.getEmployees),
      mergeMap(() =>
        this.employeeService.getEmployeeList().pipe(
          map((employees) => ({
            type: EmployeeActions.employeesGotten.type,
            employees: employees
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  postEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.addEmployee),
      mergeMap((action) => {
        const param = {body: action.employee as CreateEmployeeCommand};
        return this.employeeService.createEmployee(param).pipe(
          map(
            (employee) => ({
              type: EmployeeActions.employeeAdded.type,
              employee: employee
            }),
            catchError(() => EMPTY)
          ),
          tap(() => this.router.navigate(['/employees']))
        );
      })
    )
  );

  putEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.updateEmployee),
      mergeMap((action) => {
        const param = {body: action.employee as UpdateEmployeeCommand};
        return this.employeeService.updateEmployee(param).pipe(
          map(
            () => ({
              type: EmployeeActions.employeeUpdated.type,
              employee: action.employee
            }),
            catchError(() => EMPTY)
          ),
          tap(() => this.router.navigate(['/employees']))
        );
      })
    )
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.removeEmployee),
      mergeMap((action) => {
        const params = {
          employeeNumber: action.employeeNumber
        } as DeleteEmployeeCommand;
        return this.employeeService.deleteEmployee({body: params}).pipe(
          map(() => ({
            type: EmployeeActions.employeeRemoved.type,
            employeeNumber: action.employeeNumber
          })),
          tap(() => this.router.navigate(['/employees']))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeesService,
    private router: Router
  ) {}
}

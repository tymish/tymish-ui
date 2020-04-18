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
import {MatSnackBar} from '@angular/material/snack-bar';

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
            catchError(() => {
              this.snackBar.open('Oops, the add failed...😟', '', {
                duration: 10000
              });
              return EMPTY;
            })
          ),
          tap(() => this.router.navigate(['/employees'])),
          tap(() =>
            this.snackBar.open('Employee added! 🙂', '', {duration: 5000})
          )
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
            catchError(() => {
              this.snackBar.open('Oops, update failed...😟', '', {
                duration: 10000
              });
              return EMPTY;
            })
          ),
          tap(() => this.router.navigate(['/employees'])),
          tap(() => this.snackBar.open('Saved! 👍', '', {duration: 5000}))
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
          map(
            () => ({
              type: EmployeeActions.employeeRemoved.type,
              employeeNumber: action.employeeNumber
            }),
            catchError(() => {
              this.snackBar.open('Oops, delete failed...😟', '', {
                duration: 10000
              });
              return EMPTY;
            })
          ),
          tap(() => this.router.navigate(['/employees'])),
          tap(() =>
            this.snackBar.open('Employee deleted! 👌', '', {duration: 5000})
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}

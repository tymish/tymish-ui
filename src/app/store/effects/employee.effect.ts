import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects'

import * as EmployeeActions from '../actions/employee.action';

import { EmployeesService } from '../../core/api/services/employees.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class EmployeeEffect {

  constructor(
    private actions$: Actions,
    private employeeService: EmployeesService
  ) { }

  addEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(''),
    map(action => { }this.employeeService.createEmployee()
      .pipe(
        map(() => ({ type: EmployeeActions.LoadEmployees, payload: '' })),
        catchError(() => EMPTY)
      ))
  )
  );
}
import {createAction, props} from '@ngrx/store';

import {Employee} from '../../core/api/models/employee';

export const FETCH_EMPLOYEE = '[Employees] fetch';
export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const UPDATE_EMPLOYEE = '[EMPLOYEE] Update';

export const getEmployees = createAction(FETCH_EMPLOYEE);

export const employeesGotten = createAction(
  '[Employees API] Employees Loaded',
  props<{employees: Employee[]}>()
);

export const addEmployee = createAction(
  ADD_EMPLOYEE,
  props<{employee: Employee}>()
);

export const employeeAdded = createAction(
  '[Employees] Added',
  props<{employee: Employee}>()
);

export const removeEmployee = createAction(
  REMOVE_EMPLOYEE,
  props<{employeeNumber: number}>()
);

export const updateEmployee = createAction(
  UPDATE_EMPLOYEE,
  props<{employee: Employee}>()
);

export const employeeUpdated = createAction(
  '[Employee] update success',
  props<{employee: Employee}>()
);

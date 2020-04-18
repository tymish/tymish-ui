import {createAction, props} from '@ngrx/store';
import {Employee} from '../../core/api/models/employee';

export const getEmployees = createAction('[Employees] Get');

export const employeesGotten = createAction(
  '[Employees] Get success',
  props<{employees: Employee[]}>()
);

export const addEmployee = createAction(
  '[Employees] Add',
  props<{employee: Employee}>()
);

export const employeeAdded = createAction(
  '[Employees] Add success',
  props<{employee: Employee}>()
);

export const updateEmployee = createAction(
  '[Employees] Update',
  props<{employee: Employee}>()
);

export const employeeUpdated = createAction(
  '[Employees] Update success',
  props<{employee: Employee}>()
);

export const removeEmployee = createAction(
  '[Employees] Remove',
  props<{employeeNumber: number}>()
);

export const employeeRemoved = createAction(
  '[Employees] Remove success',
  props<{employeeNumber: number}>()
);

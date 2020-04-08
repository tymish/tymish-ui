import { createAction, props } from '@ngrx/store';

import { Employee } from '../../core/api/models/employee';


export const LOAD_EMPLOYEE = '[EMPLOYEE] Load';
export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const UPDATE_EMPLOYEE = '[EMPLOYEE] Update';

export const loadEmployees = createAction(LOAD_EMPLOYEE);

export const addEmployee = createAction(ADD_EMPLOYEE, props<{ employee: Employee }>());

export const removeEmployee = createAction(REMOVE_EMPLOYEE, props<{ employeeNumber: number }>());

export const updateEmployee = createAction(UPDATE_EMPLOYEE, props<{ employee: Employee }>());

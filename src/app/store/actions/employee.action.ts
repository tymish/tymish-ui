import { createAction, Action, props } from '@ngrx/store';

import { Employee } from '../../core/api/models/employee';


export const LOAD_EMPLOYEE = '[EMPLOYEE] Load';
export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const UPDATE_EMPLOYEE = '[EMPLOYEE] Update';

export const LoadEmployees = createAction(LOAD_EMPLOYEE, props<any>());

export const AddEmployee = createAction(ADD_EMPLOYEE, props<{ employee: Employee }>());

export const RemoveEmployee = createAction(REMOVE_EMPLOYEE, props<{ employeeNumber: number }>());

export const UpdateEmployee = createAction(UPDATE_EMPLOYEE, props<{ employee: Employee }>());


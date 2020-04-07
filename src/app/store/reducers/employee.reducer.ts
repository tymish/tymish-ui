import { Action, createReducer, on } from '@ngrx/store';
import { Employee } from '../../core/api/models/employee';

import * as EmployeeActions from '../actions/employee.action';

const initialState: Employee = {

}

const employeeReducer = createReducer(
  initialState,
  on(
    EmployeeActions.LoadEmployees,
    EmployeeActions.AddEmployee,
    EmployeeActions.LoadEmployees,
    EmployeeActions.RemoveEmployee,
    (state, { updatedValue }) => ({ ...state, prop: updatedValue })
  ),
  on(
    //todo
  )
)
export function reducer(state: Employee[] = [initialState], action: EmployeeActions) {
  return employeeReducer(state, action);
}
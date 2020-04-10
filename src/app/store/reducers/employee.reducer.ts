import {createReducer, on, Action} from '@ngrx/store';
import {Employee} from '../../core/api/models/employee';

import * as EmployeeActions from '../actions/employee.action';

const initialState: Employee[] = [];

const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.getEmployees, (state) => state),

  on(EmployeeActions.employeesGotten, (state, props) => {
    return props.employees;
  }),

  on(EmployeeActions.addEmployee, (state, props) => {
    return state;
  }),

  on(EmployeeActions.employeeAdded, (state, props) => {
    return [...state, props.employee];
  }),

  on(EmployeeActions.updateEmployee, (state, props) => {
    return state;
  }),

  on(EmployeeActions.employeeUpdated, (state, props) =>
    state.map((old) => {
      if (old.employeeNumber !== props.employee.employeeNumber) return old;

      return Object.assign(
        {},
        ...Object.keys(old).map((e) => ({[e]: props.employee[e]}))
      );
    })
  ),

  on(EmployeeActions.removeEmployee, (state, props) => ({
    ...state,
    employees: state.filter(
      (employee) => employee.employeeNumber !== props.employeeNumber
    ),
  }))
);
export function reducer(state: Employee[] | undefined, action: Action) {
  return employeeReducer(state, action);
}

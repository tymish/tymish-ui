import {createReducer, on, Action} from '@ngrx/store';
import {Employee} from '../../core/api/models/employee';

import * as EmployeeActions from '../actions/employee.action';

const initialState: Employee[] = [];

const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.getEmployees, (state) => state),

  on(EmployeeActions.employeesLoaded, (state, props) => {
    return props.employees;
  }),

  on(EmployeeActions.addEmployee, (state, props) => {
    return state;
  }),

  on(EmployeeActions.employeeAdded, (state, props) => {
    console.log(props);
    return [...state, props.employee];
  }),

  on(EmployeeActions.updateEmployee, (state, props) => {
    const index = state.findIndex(
      (employee) => employee.employeeNumber === props.employee.employeeNumber
    );
    return {...state, employees: state.splice(index)};
  }),

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

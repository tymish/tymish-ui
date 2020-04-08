import {createReducer, on, Action} from '@ngrx/store';
import {Employee} from '../../core/api/models/employee';

import * as EmployeeActions from '../actions/employee.action';

const initialState: Employee[] = [];

const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployees, (state) => state),

  on(EmployeeActions.addEmployee, (state, props) => {
    state.push(props.employee);
    return state;
  }),

  on(EmployeeActions.updateEmployee, (state, props) => {
    const index = state.findIndex(
      (employee) => employee.employeeNumber === props.employee.employeeNumber
    );
    return state.splice(index);
  }),

  on(EmployeeActions.removeEmployee, (state, props) =>
    state.filter((employee) => employee.employeeNumber !== props.employeeNumber)
  )
);
export function reducer(state: Employee[] | undefined, action: Action) {
  return employeeReducer(state, action);
}

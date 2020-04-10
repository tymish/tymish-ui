import {createReducer, on, Action} from '@ngrx/store';
import {Employee} from '../../core/api/models/employee';

import * as Actions from '../actions/employee.action';

const initialState: Employee[] = [];

const employeeReducer = createReducer(
  initialState,
  on(Actions.getEmployees, (state) => state),

  on(Actions.employeesGotten, (state, props) => {
    return props.employees;
  }),

  on(Actions.addEmployee, (state, props) => {
    return state;
  }),

  on(Actions.employeeAdded, (state, props) => {
    return [...state, props.employee];
  }),

  on(Actions.updateEmployee, (state, props) => {
    return state;
  }),

  on(Actions.employeeUpdated, (state, props) =>
    state.map((old) => {
      if (old.employeeNumber !== props.employee.employeeNumber) return old;

      return Object.assign(
        {},
        ...Object.keys(old).map((e) => ({[e]: props.employee[e]}))
      );
    })
  ),

  on(Actions.removeEmployee, (state, props) => state),

  on(Actions.employeeRemoved, (state, props) => {
    return state.filter(
      (employeeNumber) => employeeNumber !== props.employeeNumber
    );
  })
);
export function reducer(state: Employee[] | undefined, action: Action) {
  return employeeReducer(state, action);
}

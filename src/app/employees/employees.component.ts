import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';

import {AppState} from '../store/app.state';
import * as EmployeeActions from '../store/actions/employee.action';
import {selectEmployees} from '../store/selectors/employee.selector';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  public employees$ = this.store.pipe(select(selectEmployees));
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.getEmployees());
  }
}

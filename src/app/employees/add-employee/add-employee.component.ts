import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CreateEmployeeCommand} from 'src/app/core/api/models';

import * as EmployeeActions from '../../store/actions/employee.action';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  public form = new FormGroup({
    givenName: new FormControl(''),
    familyName: new FormControl(''),
    email: new FormControl(''),
    hourlyPay: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  addEmployee(): void {
    const employee: CreateEmployeeCommand = {
      givenName: this.form.get('givenName').value,
      familyName: this.form.get('familyName').value,
      email: this.form.get('email').value,
      hourlyPay: +this.form.get('hourlyPay').value,
    };
    EmployeeActions.addEmployee({employee: employee});
  }
}

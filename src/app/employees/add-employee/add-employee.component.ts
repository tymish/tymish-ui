import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CreateEmployeeCommand} from 'src/app/core/api/models';

import {addEmployee} from '../store/employee.action';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/core/app.state';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  // email regex reference: http://regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
  public form = new FormGroup({
    givenName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    familyName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
      )
    ]),
    hourlyPay: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100)
    ])
  });

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addEmployee(): void {
    if (this.form.valid) {
      const employee: CreateEmployeeCommand = {
        givenName: this.form.get('givenName').value,
        familyName: this.form.get('familyName').value,
        email: this.form.get('email').value,
        hourlyPay: +this.form.get('hourlyPay').value
      };
      this.store.dispatch(addEmployee({employee: employee}));
    }
  }
}

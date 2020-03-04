import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/core/api/services';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateEmployeeCommand } from 'src/app/core/api/models';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public form = new FormGroup({
    givenName: new FormControl(''),
    familyName: new FormControl(''),
    email: new FormControl(''),
    hourlyPay: new FormControl('')
  });

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
  }

  postEmployee(): void {
    const employee: CreateEmployeeCommand = {
      givenName: this.form.get('givenName').value,
      familyName: this.form.get('familyName').value,
      email: this.form.get('email').value,
      hourlyPay: +this.form.get('hourlyPay').value
    };
    this.service.createEmployee({body: employee}).subscribe();
  }

}

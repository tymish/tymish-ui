import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/api/services';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from 'src/app/core/api/models';

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
  })

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
  }

  postEmployee(): void {
    const employee: Employee = {
      givenName: this.form.get('givenName').value,
      familyName: this.form.get('familyName').value,
      email: this.form.get('email').value,
      hourlyPay: +this.form.get('hourlyPay').value
    }
    this.service.employeePost({body: employee}).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeesService } from 'src/app/core/api/services';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee, UpdateEmployeeCommand } from 'src/app/core/api/models';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EmployeesService) { }

  public employee$: Observable<Employee>;

  public form = new FormGroup({
    givenName: new FormControl(''),
    familyName: new FormControl(''),
    email: new FormControl(''),
    hourlyPay: new FormControl('')
  })

  ngOnInit(): void {
    const employeeNumber$ = this.route.params.pipe(map(params => +params.employeeNumber));
    this.employee$ = employeeNumber$.pipe(switchMap(employeeNumber =>
      this.service.getEmployeeByNumber({ number: employeeNumber })
    ), tap(employee => this.form.patchValue(employee)));
  }

  updateEmployee(employeeNumber: number): void {
    const updateEmployeeCommand: UpdateEmployeeCommand = {
      employeeNumber: employeeNumber,
      givenName: this.form.get('givenName').value,
      familyName: this.form.get('familyName').value,
      email: this.form.get('email').value,
      hourlyPay: +this.form.get('hourlyPay').value
    }
    this.service.updateEmployee({ body: updateEmployeeCommand }).subscribe();
  }
}

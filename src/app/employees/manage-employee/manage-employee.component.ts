import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {EmployeesService} from 'src/app/core/api/services';
import {FormGroup, FormControl} from '@angular/forms';
import {
  Employee,
  UpdateEmployeeCommand,
  DeleteEmployeeCommand
} from 'src/app/core/api/models';
import {AppState} from 'src/app/store/app.state';
import {Store} from '@ngrx/store';
import {
  updateEmployee,
  removeEmployee
} from 'src/app/store/actions/employee.action';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: EmployeesService,
    private store: Store<AppState>
  ) {}

  public employee$: Observable<Employee>;

  public form = new FormGroup({
    givenName: new FormControl(''),
    familyName: new FormControl(''),
    email: new FormControl(''),
    hourlyPay: new FormControl('')
  });

  ngOnInit(): void {
    const employeeNumber$ = this.route.params.pipe(
      map((params) => +params.employeeNumber)
    );
    this.employee$ = employeeNumber$.pipe(
      switchMap((employeeNumber) =>
        this.service.getEmployeeByNumber({number: employeeNumber})
      ),
      tap((employee) => this.form.patchValue(employee))
    );
  }

  updateEmployee(employeeNumber: number): void {
    const updateEmployeeCommand: UpdateEmployeeCommand = {
      employeeNumber,
      givenName: this.form.get('givenName').value,
      familyName: this.form.get('familyName').value,
      email: this.form.get('email').value,
      hourlyPay: +this.form.get('hourlyPay').value
    };
    this.store.dispatch(updateEmployee({employee: updateEmployeeCommand}));
  }

  delete(employeeNumber: number): void {
    this.store.dispatch(removeEmployee({employeeNumber: employeeNumber}));
  }
}

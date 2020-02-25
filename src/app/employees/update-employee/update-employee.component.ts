import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeesService } from 'src/app/core/api/services';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  public employeeNumber$: Observable<number>;

  constructor(private route: ActivatedRoute, private service: EmployeesService) { }

  ngOnInit(): void {
    this.employeeNumber$ = this.route.params.pipe(map(p => p.employeeNumber));
  }

}

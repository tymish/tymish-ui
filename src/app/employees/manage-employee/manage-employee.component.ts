import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeesService } from 'src/app/core/api/services';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  public employeeNumber$: Observable<number>;

  constructor(private route: ActivatedRoute, private service: EmployeesService) { }

  ngOnInit(): void {
    this.employeeNumber$ = this.route.params.pipe(map(p => p.employeeNumber));
  }

}

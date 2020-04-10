import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TimeReport} from '../core/api/models';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {TimeReportsService} from '../core/api/services';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-manage-time-report',
  templateUrl: './manage-time-report.component.html',
  styleUrls: ['./manage-time-report.component.scss']
})
export class ManageTimeReportComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: TimeReportsService,
    private builder: FormBuilder
  ) {}

  public timeReport$: Observable<TimeReport>;
  form = this.builder.group({eTransferReference: this.builder.control('')});

  ngOnInit(): void {
    const id$ = this.route.params.pipe(map((p) => p.id as string));
    this.timeReport$ = id$.pipe(
      switchMap((id) => this.service.getTimeReportById({id: id}))
    );
  }

  submitLink(id: string) {
    return `http://localhost:4200/submit-time-report/${id}`;
  }

  markAsPaid(id: string) {
    const reference = this.form.get('eTransferReference').value;
    this.service
      .payTimeReport({
        body: {
          id: id,
          reference: reference
        }
      })
      .subscribe();
  }
}

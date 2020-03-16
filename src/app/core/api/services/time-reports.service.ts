/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateTimeReportsCommand } from '../models/create-time-reports-command';
import { EmployeeTimeReportAggregateDto } from '../models/employee-time-report-aggregate-dto';
import { IssueTimeReportsCommand } from '../models/issue-time-reports-command';
import { MonthlyAggregateDto } from '../models/monthly-aggregate-dto';
import { SubmitTimeReportCommand } from '../models/submit-time-report-command';
import { TimeReport } from '../models/time-report';

@Injectable({
  providedIn: 'root',
})
export class TimeReportsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTimeReportById
   */
  static readonly GetTimeReportByIdPath = '/time-reports/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeReportById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeReportById$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<TimeReport>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.GetTimeReportByIdPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TimeReport>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeReportById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeReportById(params: {
    id: string;

  }): Observable<TimeReport> {

    return this.getTimeReportById$Response(params).pipe(
      map((r: StrictHttpResponse<TimeReport>) => r.body as TimeReport)
    );
  }

  /**
   * Path part for operation getEmployeeTimeReportAggregates
   */
  static readonly GetEmployeeTimeReportAggregatesPath = '/time-reports';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeTimeReportAggregates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeTimeReportAggregates$Response(params?: {
    month?: string;

  }): Observable<StrictHttpResponse<Array<EmployeeTimeReportAggregateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.GetEmployeeTimeReportAggregatesPath, 'get');
    if (params) {

      rb.query('month', params.month);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeTimeReportAggregateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEmployeeTimeReportAggregates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeTimeReportAggregates(params?: {
    month?: string;

  }): Observable<Array<EmployeeTimeReportAggregateDto>> {

    return this.getEmployeeTimeReportAggregates$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EmployeeTimeReportAggregateDto>>) => r.body as Array<EmployeeTimeReportAggregateDto>)
    );
  }

  /**
   * Path part for operation getMonthAggregate
   */
  static readonly GetMonthAggregatePath = '/time-reports/summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthAggregate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthAggregate$Response(params?: {
    month?: string;

  }): Observable<StrictHttpResponse<MonthlyAggregateDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.GetMonthAggregatePath, 'get');
    if (params) {

      rb.query('month', params.month);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MonthlyAggregateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMonthAggregate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthAggregate(params?: {
    month?: string;

  }): Observable<MonthlyAggregateDto> {

    return this.getMonthAggregate$Response(params).pipe(
      map((r: StrictHttpResponse<MonthlyAggregateDto>) => r.body as MonthlyAggregateDto)
    );
  }

  /**
   * Path part for operation submitTimeReport
   */
  static readonly SubmitTimeReportPath = '/time-reports/submit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitTimeReport()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  submitTimeReport$Response(params?: {
      body?: SubmitTimeReportCommand
  }): Observable<StrictHttpResponse<TimeReport>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.SubmitTimeReportPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TimeReport>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `submitTimeReport$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  submitTimeReport(params?: {
      body?: SubmitTimeReportCommand
  }): Observable<TimeReport> {

    return this.submitTimeReport$Response(params).pipe(
      map((r: StrictHttpResponse<TimeReport>) => r.body as TimeReport)
    );
  }

  /**
   * Path part for operation createTimeReports
   */
  static readonly CreateTimeReportsPath = '/time-reports/bulk';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTimeReports()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTimeReports$Response(params?: {
      body?: CreateTimeReportsCommand
  }): Observable<StrictHttpResponse<Array<{  }>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.CreateTimeReportsPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<{  }>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTimeReports$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createTimeReports(params?: {
      body?: CreateTimeReportsCommand
  }): Observable<Array<{  }>> {

    return this.createTimeReports$Response(params).pipe(
      map((r: StrictHttpResponse<Array<{  }>>) => r.body as Array<{  }>)
    );
  }

  /**
   * Path part for operation issueTimeReports
   */
  static readonly IssueTimeReportsPath = '/time-reports/bulk/issued';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `issueTimeReports()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  issueTimeReports$Response(params?: {
      body?: IssueTimeReportsCommand
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.IssueTimeReportsPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `issueTimeReports$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  issueTimeReports(params?: {
      body?: IssueTimeReportsCommand
  }): Observable<void> {

    return this.issueTimeReports$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

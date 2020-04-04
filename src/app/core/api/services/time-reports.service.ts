/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Employee } from '../models/employee';
import { EmployeeTimeReportAggregateDto } from '../models/employee-time-report-aggregate-dto';
import { MonthAggregateDto } from '../models/month-aggregate-dto';
import { PayTimeReportCommand } from '../models/pay-time-report-command';
import { SendTimeReportsCommand } from '../models/send-time-reports-command';
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
   * Path part for operation getEmployeeByTimeReportId
   */
  static readonly GetEmployeeByTimeReportIdPath = '/time-reports/{id}/employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeByTimeReportId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeByTimeReportId$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.GetEmployeeByTimeReportIdPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getEmployeeByTimeReportId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeByTimeReportId(params: {
    id: string;

  }): Observable<Employee> {

    return this.getEmployeeByTimeReportId$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
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
    year?: number;

  }): Observable<StrictHttpResponse<Array<MonthAggregateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.GetMonthAggregatePath, 'get');
    if (params) {

      rb.query('year', params.year);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MonthAggregateDto>>;
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
    year?: number;

  }): Observable<Array<MonthAggregateDto>> {

    return this.getMonthAggregate$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MonthAggregateDto>>) => r.body as Array<MonthAggregateDto>)
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
   * Path part for operation payTimeReport
   */
  static readonly PayTimeReportPath = '/time-reports/pay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `payTimeReport()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  payTimeReport$Response(params?: {
      body?: PayTimeReportCommand
  }): Observable<StrictHttpResponse<TimeReport>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.PayTimeReportPath, 'put');
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
   * To access the full response (for headers, for example), `payTimeReport$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  payTimeReport(params?: {
      body?: PayTimeReportCommand
  }): Observable<TimeReport> {

    return this.payTimeReport$Response(params).pipe(
      map((r: StrictHttpResponse<TimeReport>) => r.body as TimeReport)
    );
  }

  /**
   * Path part for operation sendTimeReports
   */
  static readonly SendTimeReportsPath = '/time-reports/sent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendTimeReports()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sendTimeReports$Response(params?: {
      body?: SendTimeReportsCommand
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.SendTimeReportsPath, 'put');
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
   * To access the full response (for headers, for example), `sendTimeReports$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  sendTimeReports(params?: {
      body?: SendTimeReportsCommand
  }): Observable<void> {

    return this.sendTimeReports$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation sendTimeReport
   */
  static readonly SendTimeReportPath = '/time-reports/{id}/sent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendTimeReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendTimeReport$Response(params: {
    timeReportId: string;
    id: string;

  }): Observable<StrictHttpResponse<TimeReport>> {

    const rb = new RequestBuilder(this.rootUrl, TimeReportsService.SendTimeReportPath, 'put');
    if (params) {

      rb.path('timeReportId', params.timeReportId);
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
   * To access the full response (for headers, for example), `sendTimeReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendTimeReport(params: {
    timeReportId: string;
    id: string;

  }): Observable<TimeReport> {

    return this.sendTimeReport$Response(params).pipe(
      map((r: StrictHttpResponse<TimeReport>) => r.body as TimeReport)
    );
  }

}

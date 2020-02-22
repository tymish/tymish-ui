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

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation employeeGet
   */
  static readonly EmployeeGetPath = '/employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeeGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Employee>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.EmployeeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Employee>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `employeeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeeGet(params?: {

  }): Observable<Array<Employee>> {

    return this.employeeGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Employee>>) => r.body as Array<Employee>)
    );
  }

  /**
   * Path part for operation employeePost
   */
  static readonly EmployeePostPath = '/employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  employeePost$Response(params?: {
      body?: Employee
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.EmployeePostPath, 'post');
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
   * To access the full response (for headers, for example), `employeePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  employeePost(params?: {
      body?: Employee
  }): Observable<void> {

    return this.employeePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

/* tslint:disable */
import {TimeReport} from './time-report';
export interface Employee {
  email?: null | string;
  employeeNumber?: number;
  familyName?: null | string;
  givenName?: null | string;
  hourlyPay?: number;
  id?: string;
  timeReports?: null | Array<TimeReport>;
}

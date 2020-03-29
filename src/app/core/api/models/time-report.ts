/* tslint:disable */
import { Employee } from './employee';
import { TimeEntry } from './time-entry';
export interface TimeReport {
  employee?: null | Employee;
  employeeId?: string;
  id?: string;
  paid?: null | string;
  sent?: null | string;
  submitted?: null | string;
  timeEntries?: null | Array<TimeEntry>;
}

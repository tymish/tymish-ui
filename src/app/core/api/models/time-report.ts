/* tslint:disable */
import { Employee } from './employee';
import { TimeEntry } from './time-entry';
export interface TimeReport {
  employee?: null | Employee;
  employeeId?: string;
  id?: string;
  issued?: string;
  paid?: string;
  submitted?: string;
  timeEntries?: null | Array<TimeEntry>;
}

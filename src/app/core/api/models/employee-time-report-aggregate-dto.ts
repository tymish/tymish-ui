/* tslint:disable */
import { Employee } from './employee';
export interface EmployeeTimeReportAggregateDto {
  amountOwed?: number;
  employee?: null | Employee;
  paid?: null | string;
  sent?: null | string;
  submitted?: null | string;
  timeReportId?: string;
}

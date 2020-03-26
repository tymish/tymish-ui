/* tslint:disable */
import { Employee } from './employee';
export interface EmployeeTimeReportAggregateDto {
  amountOwed?: number;
  employee?: null | Employee;
  paid?: string;
  sent?: string;
  submitted?: string;
  timeReportId?: string;
}

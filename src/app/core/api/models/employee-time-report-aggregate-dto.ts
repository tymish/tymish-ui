/* tslint:disable */
import { Employee } from './employee';
export interface EmployeeTimeReportAggregateDto {
  amountOwed?: number;
  employee?: null | Employee;
  issued?: string;
  paid?: string;
  submitted?: string;
  timeReportId?: string;
}

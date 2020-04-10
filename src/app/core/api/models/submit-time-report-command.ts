/* tslint:disable */
import {TimeEntry} from './time-entry';
export interface SubmitTimeReportCommand {
  timeEntries?: null | Array<TimeEntry>;
  timeReportId?: string;
}

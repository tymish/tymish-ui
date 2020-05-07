import {createAction, props} from '@ngrx/store';
import {Invoice} from 'src/app/core/api/models';

// Queries
export const getInvoice = createAction('[Invoice] Get');
export const invoiceGotten = createAction(
  '[Invoice] Get success',
  props<{invoice: Invoice}>()
);

// Commands
export const requestInvoice = createAction('[Invoice] Request');
export const invoiceRequested = createAction('[Invoice] Request success');

export const submitInvoice = createAction('');
export const invoiceSubmitted = createAction('');

export const payInvoice = createAction('');
export const invoicePaid = createAction('');

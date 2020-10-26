import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvoicesComponent} from './invoices/invoices.component';

const routes: Routes = [
  {path: '', redirectTo: 'vendors', pathMatch: 'full'},

  // Feature Modules
  {
    path: 'vendors',
    loadChildren: () =>
      import('./vendors/vendors.module').then((m) => m.VendorsModule),
    canActivate: []
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: '**',
    redirectTo: 'vendors'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
    path: '**',
    redirectTo: 'vendors'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

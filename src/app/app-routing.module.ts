import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './core/auth/login.component';
import {LoggedOutComponent} from './core/auth/logged-out.component';
import {AuthGuard} from './core/auth/auth.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logged-out', component: LoggedOutComponent},

  // Feature Modules
  {
    path: 'vendors',
    loadChildren: () =>
      import('./vendors/vendors.module').then((m) => m.VendorsModule),
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

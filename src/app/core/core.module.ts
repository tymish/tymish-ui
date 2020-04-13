import {NgModule} from '@angular/core';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from '../mat.module';
import {LoginComponent} from './auth/login.component';
import {LoggedOutComponent} from './auth/logged-out.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    LoginComponent,
    LoggedOutComponent
  ],
  imports: [CommonModule, HttpClientModule, AppRoutingModule, MatModule],
  exports: [ToolbarComponent, SidenavComponent, LoginComponent],
  providers: [],
  bootstrap: []
})
export class CoreModule {}

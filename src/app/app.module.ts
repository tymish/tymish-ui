import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {ApiModule} from './core/api/api.module';
import {MatModule} from './mat.module';

import {AppComponent} from './app.component';

import {environment} from 'src/environments/environment';

import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {VendorsModule} from './vendors/vendors.module';
import {InvoicesComponent} from './invoices/invoices.component';
import {PayInvoiceComponent} from './invoices/pay-invoice/pay-invoice.component';
import {LoginComponent} from './login/login.component';
import {ViewInvoiceComponent} from './invoices/view-invoice/view-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoicesComponent,
    PayInvoiceComponent,
    LoginComponent,
    ViewInvoiceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    ApiModule.forRoot({rootUrl: environment.api}),
    CoreModule,
    VendorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

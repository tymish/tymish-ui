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

// NGRX
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import {reducer} from './employees/store/employee.reducer';
import {EmployeeEffect} from './employees/store/employee.effect';
import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {InvoicesModule} from './invoices/invoices.module';
import {EmployeesModule} from './employees/employees.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatModule,
    ApiModule.forRoot({rootUrl: environment.api}),
    StoreModule.forRoot({employees: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([EmployeeEffect]),
    CoreModule,
    EmployeesModule,
    InvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

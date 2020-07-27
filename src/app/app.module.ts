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
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {CoreModule} from './core/core.module';
import {HomeComponent} from './home/home.component';
import {VendorsModule} from './vendors/vendors.module';

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
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    CoreModule,
    VendorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

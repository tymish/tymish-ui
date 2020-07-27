import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../mat.module';
import {VendorsRoutingModule} from './vendors-routing.module';
import {VendorsComponent} from './vendors/vendors.component';
import {AddVendorComponent} from './add-vendor/add-vendor.component';
import {ManageVendorComponent} from './manage-vendor/manage-vendor.component';

@NgModule({
  declarations: [VendorsComponent, AddVendorComponent, ManageVendorComponent],
  imports: [CommonModule, MatModule, ReactiveFormsModule, VendorsRoutingModule],
  exports: []
})
export class VendorsModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VendorsComponent} from './vendors/vendors.component';
import {AddVendorComponent} from './add-vendor/add-vendor.component';
import {ManageVendorComponent} from './manage-vendor/manage-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsComponent
  },
  {
    path: 'add',
    component: AddVendorComponent
  },
  {
    path: 'manage/:id',
    component: ManageVendorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule {}

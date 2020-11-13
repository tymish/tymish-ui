import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {VendorDto} from 'src/app/core/api/models';
import {VendorsService} from 'src/app/core/api/services';

@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.scss']
})
export class ManageVendorComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly vendors: VendorsService
  ) {}

  vendor$: Observable<VendorDto>;

  ngOnInit(): void {
    const vendorId = this.route.snapshot.params['id'];
    this.vendor$ = this.vendors.getVendor({id: vendorId});
  }
}

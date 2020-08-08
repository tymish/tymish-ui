import {Component, OnInit} from '@angular/core';
import {VendorsService} from 'src/app/core/api/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-vendors',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  constructor(private vendors: VendorsService, private router: Router) {}

  ngOnInit(): void {}

  addVendor(email: string) {
    this.vendors.addVendor({body: {email: email}}).subscribe();
    this.router.navigate(['vendors']);
  }
}

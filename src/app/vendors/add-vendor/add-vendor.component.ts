import {Component, OnInit} from '@angular/core';
import {VendorsService} from 'src/app/core/api/services';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {IFormGroup} from '@rxweb/types';

interface AddVendorForm {
  email: string;
  givenName: string;
  familyName: string;
}

@Component({
  selector: 'app-add-vendors',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  constructor(private vendors: VendorsService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl(''),
    givenName: new FormControl(''),
    familyName: new FormControl('')
  }) as IFormGroup<AddVendorForm>;

  get email() {
    return this.form.controls.email;
  }

  get givenName() {
    return this.form.controls.givenName;
  }

  get familyName() {
    return this.form.controls.familyName;
  }

  ngOnInit(): void {}

  addVendor() {
    this.vendors
      .addVendor({
        body: {
          email: this.email.value,
          givenName: this.givenName.value,
          familyName: this.familyName.value
        }
      })
      .subscribe();
    this.router.navigate(['vendors']);
  }
}

import {Component, OnInit} from '@angular/core';
import {VendorsService} from 'src/app/core/api/services/vendors.service';
import {Observable} from 'rxjs';
import {Vendor} from 'src/app/core/api/models/vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  constructor(private readonly service: VendorsService) {}

  public vendors$: Observable<Vendor[]>;

  ngOnInit(): void {
    this.vendors$ = this.service.listVendors();
  }
}

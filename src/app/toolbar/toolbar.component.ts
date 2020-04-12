import {Component, OnInit, Input} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import {AuthService} from '../core/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() matSidenav: MatSidenav;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}

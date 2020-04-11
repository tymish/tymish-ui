import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  template: ``,
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    // redirect to auth0 login
    this.auth.login();
  }
}

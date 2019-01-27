import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  isValidUsername = undefined;
  isValidPassword = undefined;
  constructor() {}

  ngOnInit() {}
  validateUsername() {
    if (this.username === undefined) {
      this.isValidUsername = false;
    } else {
      this.isValidUsername = true;
    }
  }
  validatePassword() {
    if (this.password === undefined) {
      this.isValidPassword = false;
    } else {
      this.isValidPassword = true;
    }
  }

  onLogin() {
    if (this.isValidUsername && this.isValidPassword) {
      console.log('logged in');
      // TODO
    } else {
      console.log('enter username or password');
    }
  }
}

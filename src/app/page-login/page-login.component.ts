import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.less']
})
export class PageLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onLogin() {
    var login = document.getElementById('login')['value'];
    var password = document.getElementById('password')['value'];
    console.log('login', login, password);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  left: boolean = true;

  constructor() { }


  ngOnInit() {

  }

  toggle(bool: boolean) {
    this.left = bool;
  }
}

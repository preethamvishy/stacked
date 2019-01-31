import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  content: any = {
    text: ""
  }
  constructor() { }

  ngOnInit() {
  }

  input(e)
  {
    var ele = document.getElementById("textarea");
    if(e.length > 35) {
      ele.style.transition = '0.4s';
      ele.style.fontSize = '20px';
    }
    else 
      ele.style.fontSize = '32px';
  }

}

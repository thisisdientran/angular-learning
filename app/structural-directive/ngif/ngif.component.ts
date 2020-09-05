import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  status: boolean = true;
  statusLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.status = true;
  }

  hide() {
    this.status = false;
  }

  login(){
    this.statusLogin = true;
  }

  logout(){
    this.statusLogin = false;
  }

}

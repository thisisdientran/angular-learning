import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  username: string = 'Dan';
  message: string = 'Hello World';
  message2: string = ''
  message4: string = ''
  isDisabled: boolean = true;
  constructor() { }
  ngOnInit(): void {
  }

  changeUserName(username){
    this.username = username
  }

  changeMessage(message){
    this.message = message;
  }

  changeMessage2(message2){
    this.message2 = message2;
  }
}
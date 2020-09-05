import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.scss']
})
export class Baitap4Component implements OnInit {
  message: string = "Register Form";
  message_fullName: string = "Full Name";
  message_email: string = "Email";
  input_fullName: string = "";
  input_email: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  submit_fullName(input_fullName){
    this.input_fullName = input_fullName;
  }
}



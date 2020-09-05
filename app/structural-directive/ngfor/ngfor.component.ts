import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  dsnv: any = [
    {ten: "Nguyen", tuoi: 18},
    {ten: "Hao", tuoi: 19},
    {ten: "Kiet", tuoi: 20},
    {ten: "Hung", tuoi: 21},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

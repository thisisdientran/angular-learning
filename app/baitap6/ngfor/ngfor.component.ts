import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  public dssp: any = [{a: 1, b: 2, c: 3, d: 4}, {a: 1, b: 2, c: 3, d: 5}, {a: 1, b: 2, c: 3, d: 6}]

  constructor() { }

  ngOnInit(): void {
  }

}

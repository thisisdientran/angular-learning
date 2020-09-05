import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {
  statusMauChu: boolean = true;
  statusFontSize: boolean = true;
  bgColor: string = "blue";

  constructor() { }

  ngOnInit(): void {
  }

}

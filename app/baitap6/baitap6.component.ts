import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss']
})
export class Baitap6Component implements OnInit {
  addProduct(maSP, tenSP, giaSP){
    const product={
      maSP,
      tenSP,
      giaSP,
    }
  }
  
  input_maSP : string ='';
  input_temSP : string ='';
  input_giaSP : string ='';

  
  constructor() { }

  ngOnInit(): void {
  }

}

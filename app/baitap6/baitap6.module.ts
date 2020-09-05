import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap6Component } from './baitap6.component';
import { NgforComponent } from './ngfor/ngfor.component';



@NgModule({
  declarations: [Baitap6Component, NgforComponent],
  exports:[
    Baitap6Component
  ],
  imports: [
    CommonModule
  ]
})
export class Baitap6Module { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';

import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module'
import { Baitap1NewModule } from './baitap1-new/baitap1-new.module'
import { Baitap4Component } from './baitap4/baitap4.component'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgifComponent } from './/structural-directive/ngif/ngif.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NgswitchComponent } from './/structural-directive/ngswitch/ngswitch.component';
import { NgforComponent } from './structural-directive/ngfor/ngfor.component';
import { AttributeDirectiveModule } from "./attribute-directive/attribute-directive.module"
import { Baitap6Module } from "./baitap6/baitap6.module"

// NgModule: metadata
@NgModule({
  // declarations: Nơi khai báo các cái component mà
  // module này quản lý
  declarations: [AppComponent, DemoComponent, Baitap4Component, NgifComponent, StructuralDirectiveComponent, NgswitchComponent, NgforComponent],
  // imports: Dùng để import các module khác vào
  // Ví dụ muốn làm việc với form thì import FormsModule
  // Muốn làm việc routing thì import RouterModule
  // Ngoài app module thì tất cả module khác do mình tạo ra
  // phải được import vào module cha
  imports: [BrowserModule, Baitap2Module, FormsModule, Baitap1NewModule, ReactiveFormsModule, AttributeDirectiveModule, Baitap6Module],
  providers: [],
  // Nơi khai báo component nguồn của module
  // Các module con khác không cần bootstrap component
  bootstrap: [AppComponent],
})

export class AppModule {}


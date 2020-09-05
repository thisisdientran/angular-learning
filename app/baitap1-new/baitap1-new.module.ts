import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1NewComponent } from './baitap1-new.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentsComponent } from './contents/contents.component'


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ContentsComponent, Baitap1NewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Baitap1NewComponent
  ]  
})


export class Baitap1NewModule { }

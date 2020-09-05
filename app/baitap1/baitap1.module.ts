import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
  ],
  imports: [CommonModule],
  // exports component để có thể sử dụng được component
  // bên ngoài module
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
  ],
})
export class Baitap1Module {}

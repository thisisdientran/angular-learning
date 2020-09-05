import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from "./attribute-directive.component";
import { HighlightComponent } from './highlight/highlight.component'


@NgModule({
  declarations: [AttributeDirectiveComponent, HighlightComponent],
  exports: [
    AttributeDirectiveComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AttributeDirectiveModule { }

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-highlight',
})
export class HighlightComponent implements OnInit {

  constructor(private ele: ElementRef, private render2: Renderer2) { }

  ngOnInit(): void {
  }

}

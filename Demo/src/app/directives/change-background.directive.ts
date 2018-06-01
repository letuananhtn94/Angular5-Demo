import { Directive, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements AfterViewInit {
  @Input() appChangeBackground: string;
  @Input() textColor: string;	

  constructor(private el: ElementRef,
    private renderer: Renderer) { 
      
    }
    
    ngAfterViewInit(): void {
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.appChangeBackground);
      this.renderer.setElementStyle(this.el.nativeElement, 'color', this.textColor);
    }
}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[margin10]'
})
export class Margin10Directive {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.elementRef.nativeElement, "margin", "10px");
    }
}
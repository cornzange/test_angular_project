import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bgblue]'
})
export class BGBlueDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "rgb(0, 208, 255)");
    }
}
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bgblue]',
    host: {
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BGBlueDirective {
    lightBlue: string = "rgb(0, 208, 255)"
    darkBlue: string = "rgb(0, 0, 255)"

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostBinding("style.backgroundColor") get getFontWeight() {
        return this.lightBlue;
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setBG(this.darkBlue);
    }

    onMouseLeave() {
        this.setBG(this.lightBlue);
    }

    setBG(background) {
        this.renderer.setStyle(this.elementRef.nativeElement, "background-color", background);
    }
}
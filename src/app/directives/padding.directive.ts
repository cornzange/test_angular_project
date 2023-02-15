import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[padding]'
})
export class PaddingDirective {
    @Input("padding") padding = "10px";
    constructor() { }

    @HostBinding("style.padding") get getPadding() {
        return this.padding;
    }
}
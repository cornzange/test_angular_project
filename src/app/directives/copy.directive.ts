import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[copy]' })
export class CopyDirective {

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    @Input() set copy(count: number) {
        let countCopies = count
        if (count < 2) countCopies = 2

        const nativeElement = this.templateRef.elementRef.nativeElement

        for (let step = 0; step < countCopies; step++) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
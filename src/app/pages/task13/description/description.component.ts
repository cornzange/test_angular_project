import { Component, ContentChild, ElementRef, OnChanges, } from '@angular/core';

@Component({
    selector: 'description-component',
    templateUrl: './description.component.html',
})
export class DescriptionComponent {
    @ContentChild("contentChildVariable", { static: false })
    header: ElementRef | undefined;

    changeTitle() {
        if (this.header !== undefined) {
            console.log(this.header);
            this.header.nativeElement.textContent = "ContentCild is changed";
        }
        console.log("change")
    }
}

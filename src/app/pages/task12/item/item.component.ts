import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.styles.css']
})
export class ItemComponent {
    @Input() todoIndex: number;
    @Input() title: string = "";
    @Input() completed: boolean = false;

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased: any) {
        this.onChanged.emit(increased);
    }
}

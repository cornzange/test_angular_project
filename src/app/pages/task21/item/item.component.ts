import { Component, Input } from '@angular/core';

@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.styles.css']
})
export class ItemComponent {
    @Input() todoIndex: number;
    @Input() title: string = "";
    @Input() completed: boolean = false;
}

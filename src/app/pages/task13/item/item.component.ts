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
    count: number = 0;

    increment() { this.count++; }
    decrement() { this.count--; }
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'albums-item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.styles.css']
})
export class ItemComponent {
    @Input() title: string = "";
}

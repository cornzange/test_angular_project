import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnChanges {
    @Input() todoIndex: number;
    @Input() title: string = "";
    @Input() completed: boolean = false;
    toggle = true;

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.completed?.currentValue === true) {
            this.toggle = true
        }
        if (changes?.completed?.currentValue === false) {
            this.toggle = false
        }
    }
}

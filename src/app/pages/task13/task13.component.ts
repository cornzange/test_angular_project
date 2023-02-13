import { Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ItemComponent } from './item/item.component';
import { Task13Service } from './task13.service';


@Component({
    selector: 'task13',
    templateUrl: './task13.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class Task13Component implements OnInit, OnDestroy {
    constructor(private service: Task13Service) { }

    observable$: Observable<any>;
    contentChildText: string = "ContentChild"

    @ViewChildren('item') itemsComponents: QueryList<ItemComponent>;

    ngOnInit(): void {
        this.getTodos();
    }

    increment() { this.itemsComponents.forEach(item => item.increment()) }
    decrement() { this.itemsComponents.forEach(item => item.decrement()) }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

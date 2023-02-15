import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task18Service } from './task18.service';


@Component({
    selector: 'task18',
    templateUrl: './task18.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class Task18Component implements OnInit, OnDestroy {
    constructor(private service: Task18Service) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

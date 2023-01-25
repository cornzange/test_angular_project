import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task12Service } from './task12.service';


@Component({
    selector: 'task12',
    templateUrl: './task12.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class Task12Component implements OnInit, OnDestroy {
    constructor(private service: Task12Service) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

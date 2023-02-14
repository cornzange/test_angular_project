import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task16Service } from './task16.service';


@Component({
    selector: 'task16',
    templateUrl: './task16.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class Task16Component implements OnInit, OnDestroy {
    constructor(private service: Task16Service) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

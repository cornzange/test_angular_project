import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task14Service } from './task14.service';


@Component({
    selector: 'task14',
    templateUrl: './task14.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class Task14Component implements OnInit, OnDestroy {
    constructor(private service: Task14Service) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

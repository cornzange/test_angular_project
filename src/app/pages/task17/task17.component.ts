import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task17Service } from './task17.service';


@Component({
    selector: 'task17',
    templateUrl: './task17.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class Task17Component implements OnInit, OnDestroy {
    constructor(private service: Task17Service) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToDoService } from './todo.service';


@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class ToDoComponent implements OnInit, OnDestroy {
    constructor(private service: ToDoService) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

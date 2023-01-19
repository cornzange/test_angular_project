import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToDoService } from './todo.service';


@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['../../common/panel.styles.css']
})
export class ToDoComponent {
    constructor(private service: ToDoService) { }

    observable$: Observable<any>;


    ngOnInit(): void {
        this.getTodos();
    }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

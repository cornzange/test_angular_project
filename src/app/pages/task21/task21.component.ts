import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task21Service } from './task21.service';


@Component({
    selector: 'task21',
    templateUrl: './task21.component.html',
    styleUrls: ['../../common/panel.styles.css', './task21.styles.css']
})
export class Task21Component implements OnInit, OnDestroy {
    constructor(private service: Task21Service) { }

    observable$: Observable<any>;
    isRed = false;
    isGreen = false;
    is20 = false;

    setRed() {
        this.isGreen = false
        this.isRed = true
    }

    setGreen() {
        this.isGreen = true
        this.isRed = false
    }

    toggleFontSize() {
        this.is20 = !this.is20
    }

    ngOnInit(): void {
        this.getTodos();
    }

    ngOnDestroy() { console.log(`onDestroy`); }

    getTodos(): void {
        this.observable$ = this.service.getAllToDo()
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task15Service } from './task15.service';


@Component({
    selector: 'task15',
    templateUrl: './task15.component.html',
    styleUrls: ['../../common/panel.styles.css', './task15.styles.css']
})
export class Task15Component implements OnInit, OnDestroy {
    constructor(private service: Task15Service) { }

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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task23Service } from './task23.service';


@Component({
    selector: 'task23',
    templateUrl: './task23.component.html',
    styleUrls: ['../../common/panel.styles.css', './task23.styles.css']
})
export class Task23Component implements OnInit, OnDestroy {
    constructor(private service: Task23Service) { }

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

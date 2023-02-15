import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task24Service } from './task24.service';


@Component({
    selector: 'task24',
    templateUrl: './task24.component.html',
    styleUrls: ['../../common/panel.styles.css', './task24.styles.css']
})
export class Task24Component implements OnInit, OnDestroy {
    constructor(private service: Task24Service) { }

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

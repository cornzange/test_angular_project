import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task22Service } from './task22.service';


@Component({
    selector: 'task22',
    templateUrl: './task22.component.html',
    styleUrls: ['../../common/panel.styles.css', './task22.styles.css']
})
export class Task22Component implements OnInit, OnDestroy {
    constructor(private service: Task22Service) { }

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

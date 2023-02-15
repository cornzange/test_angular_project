import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task25Service } from './task25.service';


@Component({
    selector: 'task25',
    templateUrl: './task25.component.html',
    styleUrls: ['../../common/panel.styles.css', './task25.styles.css']
})
export class Task25Component implements OnInit, OnDestroy {
    constructor(private service: Task25Service) { }

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
    }

    ngOnDestroy() { console.log(`onDestroy`); }
}

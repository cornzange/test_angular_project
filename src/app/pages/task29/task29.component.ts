import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task29Service } from './task29.service';


@Component({
    selector: 'task29',
    templateUrl: './task29.component.html',
    styleUrls: ['../../common/panel.styles.css', './task29.styles.css']
})
export class Task29Component implements OnInit, OnDestroy {
    constructor(private service: Task29Service) { }

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

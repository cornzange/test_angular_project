import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task27Service } from './task27.service';


@Component({
    selector: 'task27',
    templateUrl: './task27.component.html',
    styleUrls: ['../../common/panel.styles.css', './task27.styles.css']
})
export class Task27Component implements OnInit, OnDestroy {
    constructor(private service: Task27Service) { }

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

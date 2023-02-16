import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task30Service } from './task30.service';


@Component({
    selector: 'task30',
    templateUrl: './task30.component.html',
    styleUrls: ['../../common/panel.styles.css', './task30.styles.css']
})
export class Task30Component implements OnInit, OnDestroy {
    constructor(private service: Task30Service) { }

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

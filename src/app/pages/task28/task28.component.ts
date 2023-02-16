import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task28Service } from './task28.service';


@Component({
    selector: 'task28',
    templateUrl: './task28.component.html',
    styleUrls: ['../../common/panel.styles.css', './task28.styles.css']
})
export class Task28Component implements OnInit, OnDestroy {
    constructor(private service: Task28Service) { }

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

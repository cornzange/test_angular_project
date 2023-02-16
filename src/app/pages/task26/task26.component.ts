import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task26Service } from './task26.service';


@Component({
    selector: 'task26',
    templateUrl: './task26.component.html',
    styleUrls: ['../../common/panel.styles.css', './task26.styles.css']
})
export class Task26Component implements OnInit, OnDestroy {
    constructor(private service: Task26Service) { }

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

import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task33Service } from './task33.service';


@Component({
    selector: 'task33',
    templateUrl: './task33.component.html',
    styleUrls: ['../../common/panel.styles.css', './task33.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task33Component implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task33Service) { }

    todos$;
    items: any;
    toggleAfterViewInit = false
    toggleAfterContentInit = false

    ngOnChanges() {
        // you can see ngOnChanges implementation in item.component.ts
    }
    ngAfterViewInit() {
        this.toggleAfterViewInit = true
    }
    ngAfterContentInit() {
        this.toggleAfterContentInit = true
    }

    ngOnInit(): void {
        this.todos$ = this.service.getAllToDo().subscribe({
            next: (recivedItems) => {
                this.items = recivedItems
                console.log("recivedItems", recivedItems)
                this.changeDetectorRef.markForCheck();
            },
            error(msg) {
                console.log('Error Getting Location: ', msg);
            }
        });
    }

    ngOnDestroy() {
        this.todos$?.unsubscribe()
        console.log(`onDestroy`);
    }
}

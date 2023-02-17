import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task34Service } from './task34.service';


@Component({
    selector: 'task34',
    templateUrl: './task34.component.html',
    styleUrls: ['../../common/panel.styles.css', './task34.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task34Component implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task34Service) { }

    todos$;
    items: any;
    toggleAfterViewInit = false
    toggleAfterContentInit = false
    userId: number = 2

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
        this.todos$ = this.service.getToDoByUserId(this.userId).subscribe({
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

import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task31Service } from './task31.service';


@Component({
    selector: 'task31',
    templateUrl: './task31.component.html',
    styleUrls: ['../../common/panel.styles.css', './task31.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task31Component implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task31Service) { }

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

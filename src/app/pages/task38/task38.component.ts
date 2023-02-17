import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Task38Service } from './task38.service';


@Component({
    selector: 'task38',
    templateUrl: './task38.component.html',
    styleUrls: ['../../common/panel.styles.css', './task38.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task38Component implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task38Service, private route: ActivatedRoute) {
    }
    id: number;
    todos$;
    items: any;
    toggleAfterViewInit = false
    toggleAfterContentInit = false
    private querySubscription: Subscription;

    ngOnChanges(changes) {
        // you can see ngOnChanges implementation in item.component.ts
    }
    ngAfterViewInit() {
        this.toggleAfterViewInit = true
    }
    ngAfterContentInit() {
        this.toggleAfterContentInit = true
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe({
            next: data => {
                this.id = +data["id"]
                this.todos$ = this.service.getToDoByUserId(this.id).subscribe({
                    next: (recivedItems) => {
                        this.items = recivedItems
                        this.changeDetectorRef.markForCheck();
                    },
                    error(msg) {
                        console.log('Error Getting Location: ', msg);
                    }
                });
            }
        });


    }

    ngOnDestroy() {
        this.todos$?.unsubscribe()
        console.log(`onDestroy`);
    }
}

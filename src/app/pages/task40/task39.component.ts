import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Task39Service } from './task39.service';

export class Id {
    constructor(public id: number) { }
}

@Component({
    selector: 'task39',
    templateUrl: './task39.component.html',
    styleUrls: ['../../common/panel.styles.css', './task39.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task39Component implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef, private service: Task39Service, private route: ActivatedRoute) {
    }
    id: number;
    todos$;
    userId: Id = new Id(1)
    items: any;
    toggleAfterViewInit = false
    toggleAfterContentInit = false
    private querySubscription: Subscription;

    goToUserToDos(id: number) {
        this.router.navigate(
            ['/task39'],
            {
                queryParams: {
                    'id': id,
                }
            }
        );
    }

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

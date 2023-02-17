import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Task37Service } from './task37.service';


@Component({
    selector: 'task37',
    templateUrl: './task37.component.html',
    styleUrls: ['../../common/panel.styles.css', './task37.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task37Component implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task37Service, private route: ActivatedRoute) {
    }
    id: number;
    todos$;
    items: any;
    toggleAfterViewInit = false
    toggleAfterContentInit = false

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
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('id'))
        )
            .subscribe({
                next: data => {
                    this.id = +data
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

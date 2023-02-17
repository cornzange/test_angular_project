import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Task40Service } from './task40.service';

export class Id {
    constructor(public id: number) { }
}

@Component({
    selector: 'task40',
    templateUrl: './task40.component.html',
    styleUrls: ['../../common/panel.styles.css', './task40.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task40Component implements OnInit {
    constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef, private service: Task40Service, private route: ActivatedRoute) {
    }
    id: number;
    userId: Id = new Id(1)
    items: any;
    private querySubscription: Subscription;

    ngOnInit(): void {
    }
}

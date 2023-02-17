import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task43Service } from './task43.service';


@Component({
    selector: 'task43',
    templateUrl: './task43.component.html',
    styleUrls: ['../../common/panel.styles.css', './task43.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task43Component implements OnInit, OnDestroy {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task43Service) { }

    todos$;
    items: any;

    welcome: string = "The path of the righteous man is beset of all sides by the iniquities of the selfish and the tyranny of evil me...";
    persentage: number = 0.14;
    myDate = Date.now();
    pi: number = 3.1415;
    money: number = 123.45;
    message = "say hello";
    users = ["Tom", "Alice", "Sam", "Kate", "Bob"];

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

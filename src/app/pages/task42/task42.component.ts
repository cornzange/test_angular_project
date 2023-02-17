import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task42Service } from './task42.service';


@Component({
    selector: 'task42',
    templateUrl: './task42.component.html',
    styleUrls: ['../../common/panel.styles.css', './task42.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task42Component implements OnInit, OnDestroy {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task42Service) { }

    todos$;
    items: any;

    welcome: string = "The path of the righteous man is beset of all sides by the iniquities of the selfish and the tyranny of evil me...";
    persentage: number = 0.14;
    myDate = Date.now();
    pi: number = 3.1415;
    money: number = 123.45;
    message = "say hello";

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

import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ComponentCanDeactivate } from '../../guards/exit.task41.guard'
import { Task41Service } from './task41.service';


@Component({
    selector: 'task41',
    templateUrl: './task41.component.html',
    styleUrls: ['../../common/panel.styles.css', './task41.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class Task41Component implements ComponentCanDeactivate, OnInit, OnDestroy {
    constructor(private changeDetectorRef: ChangeDetectorRef, private service: Task41Service) { }

    todos$;
    items: any;
    saved: boolean = false;
    save() {
        this.saved = true;
        console.log(this.saved)
    }
    canDeactivate(): boolean | Observable<boolean> {

        if (!this.saved) {
            return confirm("Вы хотите покинуть страницу?");
        }
        else {
            return true;
        }
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

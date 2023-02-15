import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { M2Service } from './m2.service';


@Component({
    selector: 'module2',
    templateUrl: './m2.component.html'
})
export class M2Component implements OnInit {
    newItem: string = "";
    items = []
    constructor(private task25Service: M2Service) {
    }
    onChange(changes) {
        console.log(changes)
    }
    addItem(title: string) {
        this.task25Service.createToDo(title)
    }
    // deleteItem(id: number) {
    //     this.task25Service.deleteToDo(id)
    // }
    // updateItem(id: number, completed: boolean) {
    //     this.task25Service.updateToDo(id, completed)
    // }
    ngOnInit(): void {
        this.items = this.task25Service.getAllToDo()
    }
}

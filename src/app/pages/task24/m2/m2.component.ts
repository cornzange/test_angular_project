import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task24Service } from '../task24.service';


@Component({
    selector: 'module2',
    templateUrl: './m2.component.html'
})
export class M2Component implements OnInit {
    newItem: string = "";
    items = []
    constructor(private task24Service: Task24Service) {
    }
    onChange(changes) {
        console.log(changes)
    }
    addItem(title: string) {
        this.task24Service.createToDo(title)
    }
    // deleteItem(id: number) {
    //     this.task24Service.deleteToDo(id)
    // }
    // updateItem(id: number, completed: boolean) {
    //     this.task24Service.updateToDo(id, completed)
    // }
    ngOnInit(): void {
        this.items = this.task24Service.getAllToDo()
    }
}

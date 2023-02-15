import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Task24Service } from '../task24.service';


@Component({
    selector: 'module1',
    templateUrl: './m1.component.html'
})
export class M1Component implements OnInit {
    newItem: string = "";
    items = []
    constructor(private task24Service: Task24Service) {
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
        this.getToDos()
    }
    getToDos() {
        this.items = this.task24Service.getAllToDo()
    }
}

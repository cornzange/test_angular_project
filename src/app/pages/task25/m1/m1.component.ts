import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { M1Service } from './m1.service';


@Component({
    selector: 'module1',
    templateUrl: './m1.component.html',
    providers: [M1Service]
})
export class M1Component implements OnInit {
    newItem: string = "";
    items = []
    constructor(private task25Service: M1Service) {
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
        this.getToDos()
    }
    getToDos() {
        this.items = this.task25Service.getAllToDo()
    }
}

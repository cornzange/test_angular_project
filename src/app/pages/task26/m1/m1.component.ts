import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { M1Service } from './m1.service';


@Component({
    selector: 'module1',
    templateUrl: './m1.component.html',
    styleUrls: ['../../../common/panel.styles.css', './m1.styles.css'],
    providers: [M1Service]
})
export class M1Component implements OnInit {
    newItemTitle: string = "";
    newItemCompleted: boolean = false;
    items = []
    constructor(private task26Service: M1Service) {
    }
    addItem(title: string, completed: boolean) {
        this.task26Service.createToDo(title, completed)
    }
    // deleteItem(id: number) {
    //     this.task26Service.deleteToDo(id)
    // }
    // updateItem(id: number, completed: boolean) {
    //     this.task26Service.updateToDo(id, completed)
    // }
    ngOnInit(): void {
        this.getToDos()
    }
    getToDos() {
        this.items = this.task26Service.getAllToDo()
    }
}

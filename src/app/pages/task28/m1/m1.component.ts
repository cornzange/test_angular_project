import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { M1Service } from './m1.service';

export class Item {
    constructor(public title: string, public completed: boolean) {
    }

}
@Component({
    selector: 'module1',
    templateUrl: './m1.component.html',
    styleUrls: ['../../../common/panel.styles.css', './m1.styles.css'],
    providers: [M1Service]
})
export class M1Component implements OnInit {
    item: Item = new Item("", false)
    items = []
    constructor(private task28Service: M1Service) {
    }
    addItem(title: string, completed: boolean) {
        console.log("title", title)
        console.log("completed", completed)
        this.task28Service.createToDo(title, completed)
    }
    // deleteItem(id: number) {
    //     this.task28Service.deleteToDo(id)
    // }
    // updateItem(id: number, completed: boolean) {
    //     this.task28Service.updateToDo(id, completed)
    // }

    onTitleChange() {
        if (this.item.title == "validation")
            this.item.title = "валидация";
    }

    ngOnInit(): void {
        this.getToDos()
    }
    getToDos() {
        this.items = this.task28Service.getAllToDo()
    }
}

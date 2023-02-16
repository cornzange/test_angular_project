import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    constructor(private task29Service: M1Service) {
    }
    addItem(title: string, completed: boolean) {
        this.task29Service.createToDo(title, completed)
    }
    // deleteItem(id: number) {
    //     this.task29Service.deleteToDo(id)
    // }
    // updateItem(id: number, completed: boolean) {
    //     this.task29Service.updateToDo(id, completed)
    // }

    ngOnInit(): void {
        this.getToDos()
    }
    onSubmit(form: NgForm) {
        this.addItem(form.value.title, form.value.completed)
    }
    getToDos() {
        this.items = this.task29Service.getAllToDo()
    }
}

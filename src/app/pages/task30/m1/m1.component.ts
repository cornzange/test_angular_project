import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
    myForm: FormGroup = new FormGroup({
        "title": new FormControl("", [Validators.required, this.titleValidator]),
        "completed": new FormControl(false),
    });
    item: Item = new Item("", false)
    items = []
    constructor(private task30Service: M1Service) {
    }
    addItem(title: string, completed: boolean) {
        this.task30Service.createToDo(title, completed)
    }
    // deleteItem(id: number) {
    //     this.task30Service.deleteToDo(id)
    // }
    // updateItem(id: number, completed: boolean) {
    //     this.task30Service.updateToDo(id, completed)
    // }

    titleValidator(control: FormControl): { [s: string]: boolean } | null {
        if (control.value === "validator") {
            return { "title": true };
        }
        return null;
    }

    ngOnInit(): void {
        this.getToDos()
    }
    submit() {
        console.log(this.myForm);
        // this.addItem(form.value.title, form.value.completed)
    }
    getToDos() {
        this.items = this.task30Service.getAllToDo()
    }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item.component';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ItemComponent],
    exports: [ItemComponent],
    bootstrap: [ItemComponent]
})
export class ItemModule { }

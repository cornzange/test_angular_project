import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item.component';
import { CommentsModule } from '../comments/comments.module';
@NgModule({
    imports: [BrowserModule, FormsModule, CommentsModule],
    declarations: [ItemComponent],
    exports: [ItemComponent],
    bootstrap: [ItemComponent]
})
export class ItemModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments.component';
import { ItemModule } from '../item/item.module';
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule],
    declarations: [CommentsComponent],
    exports: [CommentsComponent],
    bootstrap: [CommentsComponent]
})
export class CommentsModule { }

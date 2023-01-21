import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment.component';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CommentComponent],
    exports: [CommentComponent],
    bootstrap: [CommentComponent]
})
export class CommentModule { }

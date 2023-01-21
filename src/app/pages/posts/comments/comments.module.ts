import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments.component';
import { CommentModule } from './comment/comment.module';
@NgModule({
    imports: [BrowserModule, FormsModule, CommentModule],
    declarations: [CommentsComponent],
    exports: [CommentsComponent],
    bootstrap: [CommentsComponent]
})
export class CommentsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post.component';
import { CommentsModule } from '../comments/comments.module';
@NgModule({
    imports: [BrowserModule, FormsModule, CommentsModule],
    declarations: [PostComponent],
    exports: [PostComponent],
    bootstrap: [PostComponent]
})
export class PostModule { }

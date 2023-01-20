import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { ItemModule } from './item/item.module'
import { HttpClientModule } from '@angular/common/http';
import { CommentsModule } from './comments/comments.module'
@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule, HttpClientModule, CommentsModule],
    declarations: [PostsComponent],
})
export class PostsModule { }

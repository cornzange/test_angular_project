import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { PostModule } from './post/post.module'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, FormsModule, PostModule, HttpClientModule],
    declarations: [PostsComponent],
})
export class PostsModule { }

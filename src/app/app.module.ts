import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToDoModule } from './pages/todo/todo.module';
import { PostsModule } from './pages/posts/posts.module';
import { AlbumsModule } from './pages/albums/albums.module'
@NgModule({
    imports: [ToDoModule, PostsModule, AlbumsModule, BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }

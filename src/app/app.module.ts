import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToDoModule } from './pages/todo/todo.module';
import { Task12Module } from './pages/task12/task12.module';
import { Task13Module } from './pages/task13/task13.module';
import { PostsModule } from './pages/posts/posts.module';
import { AlbumsModule } from './pages/albums/albums.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [Task13Module, Task12Module, ToDoModule, PostsModule, AlbumsModule, BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }

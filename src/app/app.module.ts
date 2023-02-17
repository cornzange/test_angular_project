import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToDoModule } from './pages/todo/todo.module';
import { Task12Module } from './pages/task12/task12.module';
import { Task13Module } from './pages/task13/task13.module';
import { Task14Module } from './pages/task14/task14.module';
import { Task15Module } from './pages/task15/task15.module';
import { Task16Module } from './pages/task16/task16.module';
import { Task17Module } from './pages/task17/task17.module';
import { Task18Module } from './pages/task18/task18.module';
import { Task19Module } from './pages/task19/task19.module';
import { Task20Module } from './pages/task20/task20.module';
import { Task21Module } from './pages/task21/task21.module';
import { Task22Module } from './pages/task22/task22.module';
import { Task23Module } from './pages/task23/task23.module';
import { Task24Module } from './pages/task24/task24.module';
import { Task25Module } from './pages/task25/task25.module';
import { Task26Module } from './pages/task26/task26.module';
import { Task27Module } from './pages/task27/task27.module';
import { Task28Module } from './pages/task28/task28.module';
import { Task29Module } from './pages/task29/task29.module';
import { Task30Module } from './pages/task30/task30.module';
import { Task31Module } from './pages/task31/task31.module';
import { Task32Module } from './pages/task32/task32.module';
import { Task33Module } from './pages/task33/task33.module';
import { Task34Module } from './pages/task34/task34.module';
// import { Task35Module } from './pages/task35/task35.module';
// import { Task36Module } from './pages/task36/task36.module';
import { Task37Module } from './pages/task37/task37.module';
import { Task38Module } from './pages/task38/task38.module';
import { Task39Module } from './pages/task39/task39.module';
import { Task40Module } from './pages/task40/task40.module';
import { IdModule } from './pages/task40/id/id.module';
import { TextModule } from './pages/task40/text/text.module';
import { Task41Module } from './pages/task41/task41.module';
import { Task42Module } from './pages/task42/task42.module';
// import { Task43Module } from './pages/task43/task43.module';
// import { Task44Module } from './pages/task44/task44.module';
// import { Task45Module } from './pages/task45/task45.module';
// import { Task46Module } from './pages/task46/task46.module';
// import { Task47Module } from './pages/task47/task47.module';
import { PostsModule } from './pages/posts/posts.module';
import { AlbumsModule } from './pages/albums/albums.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task24Service } from './pages/task24/task24.service';
@NgModule({
    imports: [
        Task12Module,
        Task13Module,
        Task14Module,
        Task15Module,
        Task16Module,
        Task17Module,
        Task18Module,
        Task19Module,
        Task20Module,
        Task21Module,
        Task22Module,
        Task23Module,
        Task24Module,
        Task25Module,
        Task26Module,
        Task27Module,
        Task28Module,
        Task29Module,
        Task30Module,
        Task31Module,
        Task32Module,
        Task33Module,
        Task34Module,
        // Task35Module,
        // Task36Module,
        Task37Module,
        Task38Module,
        Task39Module,
        Task40Module,
        IdModule,
        TextModule,
        Task41Module,
        Task42Module,
        // Task43Module,
        // Task44Module,
        // Task45Module,
        // Task46Module,
        // Task47Module,
        ToDoModule,
        PostsModule,
        AlbumsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [Task24Service]
})
export class AppModule { }

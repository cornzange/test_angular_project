import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './pages/todo/todo.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes: Routes = [
  { path: 'todo', component: ToDoComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
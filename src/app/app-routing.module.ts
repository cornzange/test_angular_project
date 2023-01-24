import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './pages/todo/todo.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes: Routes = [
  { path: 'todo', component: ToDoComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'posts', component: PostsComponent },
  { path: '12', component: PostsComponent },
  { path: '13', component: PostsComponent },
  { path: '14', component: PostsComponent },
  { path: '15', component: PostsComponent },
  { path: '16', component: PostsComponent },
  { path: '17', component: PostsComponent },
  { path: '18', component: PostsComponent },
  { path: '19', component: PostsComponent },
  { path: '20', component: PostsComponent },
  { path: '21', component: PostsComponent },
  { path: '22', component: PostsComponent },
  { path: '23', component: PostsComponent },
  { path: '24', component: PostsComponent },
  { path: '25', component: PostsComponent },
  { path: '26', component: PostsComponent },
  { path: '27', component: PostsComponent },
  { path: '28', component: PostsComponent },
  { path: '29', component: PostsComponent },
  { path: '30', component: PostsComponent },
  { path: '31', component: PostsComponent },
  { path: '32', component: PostsComponent },
  { path: '33', component: PostsComponent },
  { path: '34', component: PostsComponent },
  { path: '35', component: PostsComponent },
  { path: '36', component: PostsComponent },
  { path: '37', component: PostsComponent },
  { path: '38', component: PostsComponent },
  { path: '39', component: PostsComponent },
  { path: '40', component: PostsComponent },
  { path: '41', component: PostsComponent },
  { path: '42', component: PostsComponent },
  { path: '43', component: PostsComponent },
  { path: '44', component: PostsComponent },
  { path: '45', component: PostsComponent },
  { path: '46', component: PostsComponent },
  { path: '47', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
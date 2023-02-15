import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './pages/todo/todo.component';
import { Task12Component } from './pages/task12/task12.component';
import { Task13Component } from './pages/task13/task13.component';
import { Task14Component } from './pages/task14/task14.component';
import { Task15Component } from './pages/task15/task15.component';
import { Task16Component } from './pages/task16/task16.component';
import { Task17Component } from './pages/task17/task17.component';
import { Task18Component } from './pages/task18/task18.component';
import { Task19Component } from './pages/task19/task19.component';
import { Task20Component } from './pages/task20/task20.component';
// import { Task21Component } from './pages/task21/task21.component';
// import { Task22Component } from './pages/task22/task22.component';
// import { Task23Component } from './pages/task23/task23.component';
// import { Task24Component } from './pages/task24/task24.component';
// import { Task25Component } from './pages/task25/task25.component';
// import { Task26Component } from './pages/task26/task26.component';
// import { Task27Component } from './pages/task27/task27.component';
// import { Task28Component } from './pages/task28/task28.component';
// import { Task29Component } from './pages/task29/task29.component';
// import { Task30Component } from './pages/task30/task30.component';
// import { Task31Component } from './pages/task31/task31.component';
// import { Task32Component } from './pages/task32/task32.component';
// import { Task33Component } from './pages/task33/task33.component';
// import { Task34Component } from './pages/task34/task34.component';
// import { Task35Component } from './pages/task35/task35.component';
// import { Task36Component } from './pages/task36/task36.component';
// import { Task37Component } from './pages/task37/task37.component';
// import { Task38Component } from './pages/task38/task38.component';
// import { Task39Component } from './pages/task39/task39.component';
// import { Task40Component } from './pages/task40/task40.component';
// import { Task41Component } from './pages/task41/task41.component';
// import { Task42Component } from './pages/task42/task42.component';
// import { Task43Component } from './pages/task43/task43.component';
// import { Task44Component } from './pages/task44/task44.component';
// import { Task45Component } from './pages/task45/task45.component';
// import { Task46Component } from './pages/task46/task46.component';
// import { Task47Component } from './pages/task47/task47.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';

const routes: Routes = [
  { path: 'todo', component: ToDoComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'task12', component: Task12Component },
  { path: 'task13', component: Task13Component },
  { path: 'task14', component: Task14Component },
  { path: 'task15', component: Task15Component },
  { path: 'task16', component: Task16Component },
  { path: 'task17', component: Task17Component },
  { path: 'task18', component: Task18Component },
  { path: 'task19', component: Task19Component },
  { path: 'task20', component: Task20Component },
  // { path: 'task21', component: Task21Component },
  // { path: 'task22', component: Task22Component },
  // { path: 'task23', component: Task23Component },
  // { path: 'task24', component: Task24Component },
  // { path: 'task25', component: Task25Component },
  // { path: 'task26', component: Task26Component },
  // { path: 'task27', component: Task27Component },
  // { path: 'task28', component: Task28Component },
  // { path: 'task29', component: Task29Component },
  // { path: 'task30', component: Task30Component },
  // { path: 'task31', component: Task31Component },
  // { path: 'task32', component: Task32Component },
  // { path: 'task33', component: Task33Component },
  // { path: 'task34', component: Task34Component },
  // { path: 'task35', component: Task35Component },
  // { path: 'task36', component: Task36Component },
  // { path: 'task37', component: Task37Component },
  // { path: 'task38', component: Task38Component },
  // { path: 'task39', component: Task39Component },
  // { path: 'task40', component: Task40Component },
  // { path: 'task41', component: Task41Component },
  // { path: 'task42', component: Task42Component },
  // { path: 'task43', component: Task43Component },
  // { path: 'task44', component: Task44Component },
  // { path: 'task45', component: Task45Component },
  // { path: 'task46', component: Task46Component },
  // { path: 'task47', component: Task47Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
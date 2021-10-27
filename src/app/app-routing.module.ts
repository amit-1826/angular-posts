import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./modules/posts/posts-list/posts-list.component";
import {AuthComponent} from "./modules/auth/auth.component";
import {AddEditPostComponent} from "./modules/posts/add-edit-post/add-edit-post.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/add',
    component: AddEditPostComponent
  },
  {
    path: 'posts/:id',
    component: AddEditPostComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

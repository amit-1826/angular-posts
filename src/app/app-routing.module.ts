import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./modules/posts/posts-list/posts-list.component";
import {AuthComponent} from "./modules/auth/auth.component";

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
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

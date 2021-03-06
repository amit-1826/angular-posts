import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { PostsListComponent } from './modules/posts/posts-list/posts-list.component';
import { PostComponent } from './modules/posts/post/post.component';
import { AddEditPostComponent } from './modules/posts/add-edit-post/add-edit-post.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FavoritesComponent } from './modules/posts/favorites/favorites.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PostsListComponent,
    PostComponent,
    AddEditPostComponent,
    HeaderComponent,
    FavoritesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

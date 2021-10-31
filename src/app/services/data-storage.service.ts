import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {PostsService} from "./posts.service";
import {Post} from "../post.model";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

const AUTH_KEY = environment.authKey;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private postsService: PostsService, private http: HttpClient) { }

  savePosts() {
    const allPosts: Post[] = this.postsService.getAllPosts();
    return this.http.put('https://angular-posts-6dbab-default-rtdb.firebaseio.com/posts.json', allPosts)
  }

  fetchPosts() {
    return this.http.get<Post[]>('https://angular-posts-6dbab-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        tap((postsList: Post[]) => {
          this.postsService.setPosts(postsList);
        })
      );
  }
}

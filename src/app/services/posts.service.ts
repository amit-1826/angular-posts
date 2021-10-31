import {EventEmitter, Injectable} from '@angular/core';
import {Post} from "../post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsList: Post[] = [];
  onPostListChanged: EventEmitter<Post[]> = new EventEmitter<Post[]>();
  constructor() { }

  getAllPosts() {
    return this.postsList;
  }

  getPost(index: number) {
    return this.postsList[index];
  }

  deletePost(title: string, index: number) {
    this.postsList.splice(index, 1);
  }

  addPost(post: Post) {
    this.postsList.push(post);
  }

  updatePost(post: any, index: number) {
    this.postsList[index] = post;
  }

  getFavorites() {
    return this.postsList.filter((post) => post.isFavorite);
  }

  likePost(index: number) {
    this.postsList[index].likes += 1;
  }

  setPosts(postsList: Post[]) {
    this.postsList = postsList;
    this.onPostListChanged.emit();
  }
}

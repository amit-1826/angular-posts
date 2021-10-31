import { Injectable } from '@angular/core';
import {Post} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsList: Post[] = [
    new Post('post 1', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1600x900.jpg', 'amit dubey', new Date(), false),
    new Post('post 2', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      'https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320', 'amit dubey', new Date(), true)
  ]
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
}

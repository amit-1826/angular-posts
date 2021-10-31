import { Component, OnInit } from '@angular/core';
import {Post} from "../../../post.model";
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
    this.postsService.onPostListChanged.subscribe(() => {
      this.getPosts();
    })
  }

  getPosts() {
    this.postsList = this.postsService.getAllPosts();
  }

}

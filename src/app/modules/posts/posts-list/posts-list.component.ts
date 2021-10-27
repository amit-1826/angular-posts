import { Component, OnInit } from '@angular/core';
import {Post} from "../../../post.model";
import {PostsService} from "../../../posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsList = this.postsService.getAllPosts();
  }

}

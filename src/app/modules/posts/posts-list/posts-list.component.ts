import { Component, OnInit } from '@angular/core';
import {Post} from "../../../post.model";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList: Post[] = [
    new Post('post 1', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      '', 'amit dubey', new Date()),
    new Post('post 2', 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      '', 'amit dubey', new Date())
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../post.model";
import {PostsService} from "../../../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.postsService.deletePost(this.post.title);
  }

}

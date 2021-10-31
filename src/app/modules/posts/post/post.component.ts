import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../post.model";
import {PostsService} from "../../../posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;
  @Input('index') index: number;
  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onEditPost() {
    this.router.navigate(['posts', this.index]);
  }

  onDelete() {
    this.postsService.deletePost(this.post.title, this.index);
  }

  onFavoritesChanged() {
    this.post.isFavorite = !this.post.isFavorite;
  }

}

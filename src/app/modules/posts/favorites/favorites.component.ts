import { Component, OnInit } from '@angular/core';
import {Post} from "../../../post.model";
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesList: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.favoritesList = this.postsService.getFavorites();
  }

}

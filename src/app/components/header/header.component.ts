import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../../services/data-storage.service";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  favoritesCount = 0;
  constructor(private dataStorageService: DataStorageService,
              private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.getFavoritesCount();
    this.postsService.onPostListChanged.subscribe(() => {
      this.getFavoritesCount();
    })
  }

  getFavoritesCount() {
    this.favoritesCount = this.postsService.getFavorites().length;
  }

  savePosts() {
    this.dataStorageService.savePosts().subscribe((savedData) => {
      alert('Posts saved');
    });
  }

  fetchPosts() {
    this.dataStorageService.fetchPosts().subscribe((response) => {
      this.getFavoritesCount();
    })
  }

}

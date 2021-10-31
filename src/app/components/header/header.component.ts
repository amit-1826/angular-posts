import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../../services/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  savePosts() {
    this.dataStorageService.savePosts().subscribe((savedData) => {
      alert('Posts saved');
    });
  }

  fetchPosts() {
    this.dataStorageService.fetchPosts().subscribe((response) => {
      // alert('all posts are fetched');
    })
  }

}

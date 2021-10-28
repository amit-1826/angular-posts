import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../../posts.service";
import {Post} from "../../../post.model";

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  isEditMode = false;
  postForm: FormGroup;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      imagePath: new FormControl('', Validators.required)
    })
  }

  get formControl() {
    return this.postForm.controls;
  }

  onSubmit() {
    const post: Post = this.postForm.value;
    post.author = 'Amit Dubey';
    post.createdAt = new Date();
    this.postsService.addPost(post);
    this.clearForm();
  }

  clearForm() {
    this.postForm.reset();
  }

}


import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../../posts.service";
import {Post} from "../../../post.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  postForm: FormGroup;
  isEdit = false;
  selectedPost: any;
  editedIndex: number;
  constructor(private postsService: PostsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.makeForm();
    this.handleListener();
  }

  handleListener() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.editedIndex = +params['id'];
      if (this.editedIndex || this.editedIndex == 0) {
        this.isEdit = !!params['id'];
        this.selectedPost = this.postsService.getPost(this.editedIndex);
        this.setFormValues();
      }
    })
  }

  setFormValues() {
    this.postForm.patchValue(this.selectedPost);
  }

  makeForm() {
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
    if (!this.isEdit) {
      post.author = 'Amit Dubey';
      post.createdAt = new Date();
      post.isFavorite = false;
      this.postsService.addPost(post);
    } else {
      const updatedPost = {...this.selectedPost, ...post};
      this.postsService.updatePost(updatedPost, this.editedIndex);
    }
    this.router.navigate(['posts']);
  }

  cancelEdit() {
    window.history.back();
  }

  clearForm() {
    this.postForm.reset();
  }

}


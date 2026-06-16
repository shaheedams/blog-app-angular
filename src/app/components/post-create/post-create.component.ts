import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-post-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup = null!;
  service = inject(PostService);

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)]),
      userId: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    });

    // this.postForm.controls['title'].valueChanges.subscribe();
    // this.postForm.controls['title'].addValidators([Validators.required]);
    // this.postForm.controls['title'].enable().disable();

    combineLatest([
      this.postForm.controls['title'].valueChanges,
      this.postForm.controls['body'].valueChanges,
    ]).subscribe({
      next(value) {
        console.log('Triggered', value);
      },
    });

    this.postForm.valueChanges.subscribe({
      next(value) {
        // console.log(value);
      },
    });
  }

  onSubmit() {
    this.postForm.setValue({});
    this.postForm.patchValue({});
    this.postForm.value.title;
    this.postForm.valid;
    this.service.createPost(this.postForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}

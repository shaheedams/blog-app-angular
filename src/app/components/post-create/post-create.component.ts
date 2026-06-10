import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  imports: [ReactiveFormsModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup = null!;
  service = inject(PostService);

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)]),
      userId: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    })
  }



  onSubmit() {
    this.service.createPost(this.postForm.value).subscribe({
      next: (data) => {
        console.log(data);

      }, error(err) {
        console.log(err);

      },
    })
  }

}

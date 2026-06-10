import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../models/post-model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  route = inject(ActivatedRoute);
  service = inject(PostService);
  post = signal<PostModel | null>(null);
  isLoading = signal<boolean>(true);
  postId: number = null!;

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(this.postId).subscribe({
      next: (data) => {
        this.post.set(data);
        this.isLoading.set(false)
      }, error: (e) => {
        console.log(e);
      }
    })

  }
}

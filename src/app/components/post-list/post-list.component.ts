import { Component, inject, OnInit, signal } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  service = inject(PostService);
  postList = signal<PostModel[]>([]);
  isLoading = signal<boolean>(true);


  ngOnInit(): void {
    this.service.getAllPost().subscribe(
      {
        next: (posts) => {
          this.postList.set(posts);
          this.isLoading.set(false);
        }, error: (err) => {
          console.error('Failed to load data', err);
        },
      }
    )
  }
}

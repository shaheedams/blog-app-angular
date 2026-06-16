import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    loadComponent: () => {
      return import('./components/post-create/post-create.component').then(
        (m) => m.PostCreateComponent
      );
    },
  },
  {
    path: 'update/:id',
    loadComponent: () => {
      return import('./components/post-update/post-update.component').then(
        (m) => m.PostUpdateComponent
      );
    },
  },
  {
    path: 'post/:id',
    loadComponent: () => {
      return import('./components/post/post.component').then((m) => m.PostComponent);
    },
  },
  {
    path: 'props-drill',
    loadComponent: () => {
      return import('./components/parent/parent').then((m) => m.Parent);
    },
  },
  {
    path: 'rxjs',
    loadComponent: () => {
      return import('./components/rxjs-text/rxjs-text').then((m) => m.RxjsText);
    },
  },
  {
    path: '**',
    loadComponent: () => {
      return import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent);
    },
  },
];

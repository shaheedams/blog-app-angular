import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PostModel } from '../models/post-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }


  getAllPost(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(environment.apiUrl);
  }

  getById(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${environment.apiUrl}/${id}`)
  }

  createPost(data: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(environment.apiUrl, data);
  }
}

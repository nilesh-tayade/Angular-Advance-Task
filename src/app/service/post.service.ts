import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../class/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http :HttpClient) { }

  baseUrl="http://localhost:8080/post/";
  
  getAllPosts():Observable<Post[]>
  {
  return this.http.get<Post[]>(this.baseUrl);
  }
  
  getPostById(id:number):Observable<Post>
  {
  return this.http.get<Post>(this.baseUrl+id);
  }
  
  savePost(post:any):Observable<Post>
  {
    return this.http.post<Post>(this.baseUrl,post);
  }
  
  deletePost(id:number)
  {
    return this.http.delete<Post>(this.baseUrl+id);
  }
  
  updatePost(post:Post):Observable<Post>
  {
    return this.http.put<Post>(this.baseUrl+post.id,post);
  }
  
}

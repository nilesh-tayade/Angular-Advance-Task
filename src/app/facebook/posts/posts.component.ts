import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/class/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostService) { }
posts :Post[];

  ngOnInit(): void {
    this.getAllPosts();
  }


  getAllPosts(){
    this.postService.getAllPosts().subscribe(data=>{
      this.posts=data;
      console.log(data);
      
    })
  }
}

import { PostsService } from './../../Services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Iposts } from 'src/app/Models/iposts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Iposts[]=[];
  constructor(public postsService:PostsService){

  }
  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      {
        next:(data)=>{
          this.posts= data;
        },
        error:(err)=>{

        }

      }
    )
  }

}

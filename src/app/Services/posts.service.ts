import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from '../Models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public httpClient:HttpClient) {

   }
   getPosts():Observable<Iposts[]>{
    return this.httpClient.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts');
   }
}

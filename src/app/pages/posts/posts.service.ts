import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private url = "https://jsonplaceholder.typicode.com/posts"

  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}

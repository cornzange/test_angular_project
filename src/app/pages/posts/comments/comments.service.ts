import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }

    private url = "https://jsonplaceholder.typicode.com/comments"

    getCommentsForPost(postId: number): Observable<any> {
        const params = postId ? `?postId=${postId}` : ""
        return this.http.get<any>(`${this.url}${params}`)
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    constructor(private http: HttpClient) { }

    private url = "https://jsonplaceholder.typicode.com/albums"

    getAllAlbums(): Observable<any> {
        return this.http.get<any>(this.url)
    }
}

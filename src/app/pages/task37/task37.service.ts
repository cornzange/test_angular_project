import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task37Service {

  constructor(private http: HttpClient) { }

  private url = "https://jsonplaceholder.typicode.com/todos"

  mapData = (data: any) => {
    return data?.map(({ id, completed, title }) => {
      return {
        id,
        isDone: completed,
        text: title
      }
    }
    )
  }
  getAllToDo(): Observable<any> {
    return this.http.get<any>(this.url).pipe(map(this.mapData),
      catchError(err => {
        console.log(err);
        return [];
      }));
  }

  getToDoByUserId(userId: number) {
    const params = new HttpParams()
      .set('userId', userId.toString())

    return this.http.get<any>(this.url, { params }).pipe(map(this.mapData),
      catchError(err => {
        console.log(err);
        return [];
      }));
  }
}

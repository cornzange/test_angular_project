import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task33Service {

  constructor(private http: HttpClient) { }

  private url = "https://jsonplaceholder.typicode.com/todos1"

  getAllToDo(): Observable<any> {
    const mapData = (data: any) => {
      return data?.map(({ id, completed, title }) => {
        return {
          id,
          isDone: completed,
          text: title
        }
      }
      )
    }

    return this.http.get<any>(this.url).pipe(map(mapData),
      catchError(err => {
        console.log(err);
        return [];
      }));
  }
}

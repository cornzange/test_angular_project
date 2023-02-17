import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task32Service {

  constructor(private http: HttpClient) { }

  private url = "https://jsonplaceholder.typicode.com/todos"

  getAllToDo(): Observable<any> {
    return this.http.get<any>(this.url).pipe(map((data: any) => {
      return data?.map(({ id, completed, title }) => {
        return {
          id,
          isDone: completed,
          text: title
        }
      }
      )
    }));
  }
}

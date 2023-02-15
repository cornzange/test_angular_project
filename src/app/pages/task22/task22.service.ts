import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service'

@Injectable()
export class Task22Service {

  constructor(private http: HttpClient, private logService: LogService) { }

  private url = "https://jsonplaceholder.typicode.com/todos"

  getAllToDo(): Observable<any> {
    this.logService.write("операция получения данных");
    return this.http.get<any>(this.url)
  }
}

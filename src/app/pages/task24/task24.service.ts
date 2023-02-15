import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service'

@Injectable()
export class Task24Service {

  constructor(private http: HttpClient, @Optional() private logService: LogService) { }

  private url = "https://jsonplaceholder.typicode.com/todos"

  getAllToDo(): Observable<any> {
    if (this.logService) this.logService.write("операция получения данных");
    return this.http.get<any>(this.url)
  }
}

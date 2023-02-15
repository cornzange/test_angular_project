import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Injectable()
export class Task24Service {
  constructor() { }

  todos = [{
    id: 1,
    title: "Default item",
    completed: false
  }]

  getAllToDo() {
    return this.todos
  }

  createToDo(title: string) {
    const newToDo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.todos.push(newToDo)
  }

  // updateToDo(id: number, completed: boolean) {
  //   this.todos = this.todos.map((todo) => {
  //     if (todo?.id === id) {
  //       return {
  //         id,
  //         title: todo?.title,
  //         completed
  //       }
  //     }
  //     return todo
  //   })
  // }

  // deleteToDo(id: number) {
  //   this.todos = this.todos.filter(todo => todo?.id !== id)
  // }
}

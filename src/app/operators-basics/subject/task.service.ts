import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  newTask = new Subject<string>();

  task: string = ""

  constructor() {
    this.newTask.next(this.task)
  }
}

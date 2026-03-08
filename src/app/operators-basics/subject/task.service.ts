import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  newTask = new Subject<string>();

  createTask(value: string){
    this.newTask.next(value)
  }
}

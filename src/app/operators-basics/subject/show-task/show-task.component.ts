import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss'
})
export class ShowTaskComponent implements OnInit{
  constructor(
    private taskService: TaskService
  ){}

  tasks: string[] = [];

  ngOnInit(): void {
    this.taskService.newTask.subscribe((task: string)=> {
      this.tasks.push(task)
    })
  }


}

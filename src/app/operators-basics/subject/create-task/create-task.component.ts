import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  constructor(
    private taskService: TaskService
  ){}

  newTask: string = "";

  onCreateTask(){
    this.taskService.createTask(this.newTask)
    console.log('task before clean up:',this.newTask)
    this.newTask = "";
    console.log('task after clean up:',this.newTask)

}
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-input-task',
  standalone: false,
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.scss'
})
export class InputTaskComponent {
  newTaskContent: string = '';

  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (!this.newTaskContent.trim()) return;

    const newTask: Task = {
      content: this.newTaskContent,
      completed: false
    };

    this.taskService.createTask(newTask).subscribe({
      next: (createdTask) => {
        this.taskAdded.emit(createdTask);
        this.newTaskContent = '';
      },
      error: (err) => console.error('Erreur lors de l\'ajout de la tâche', err)
    });
    this.taskService.getAllTasks().subscribe(); // il faut rafraichir 
  }
}

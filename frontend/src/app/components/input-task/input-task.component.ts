import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.scss'
})
export class InputTaskComponent {
  newTaskContent: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (!this.newTaskContent.trim()) return;

    const newTask: Task = {
      content: this.newTaskContent,
      completed: false
    };

    this.taskService.createTask(newTask).subscribe({
      next: (createdTask) => {
        this.newTaskContent = ''; // Vide le champ après ajout
        this.taskService.refreshTasks.next(); // 👈 IMPORTANT : rafraîchir la liste
      },
      error: (err) => console.error('Erreur lors de l\'ajout de la tâche', err)
    });
  }
}
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-task',
  standalone: false,
  templateUrl: './ajouter-task.component.html',
  styleUrl: './ajouter-task.component.scss'
})
export class AjouterTaskComponent {
  newTaskContent = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    if (!this.newTaskContent.trim()) return;

    const newTask: Task = {
      content: this.newTaskContent,
      completed: false
    };

    this.taskService.createTask(newTask).subscribe({
      next: (task) => {
        this.newTaskContent = '';
        // 👇 Après ajout => redirection vers la liste
        this.router.navigate(['/liste-taches']);
      },
      error: (err) => console.error('Erreur lors de l\'ajout de la tâche', err)
    });
  }
}

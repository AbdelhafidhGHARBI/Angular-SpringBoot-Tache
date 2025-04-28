import { Component, OnDestroy } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnDestroy{
  tasks: Task[] = [];
  isLoading: boolean = false;
  private taskRefreshSubscription!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
      // 👇 Écoute l'événement refreshTasks pour recharger la liste
    this.taskRefreshSubscription = this.taskService.refreshTasks.subscribe(() => {
      this.loadTasks();
    });
  }

  ngOnDestroy(): void {
    // 🔥 Très important pour éviter les fuites mémoire
    if (this.taskRefreshSubscription) {
      this.taskRefreshSubscription.unsubscribe();
    }
  }
  
  loadTasks(): void {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe({
      next: (dataFromBackend) => {
        this.tasks = dataFromBackend;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des tâches', err);
        this.isLoading = false;
      }
    });
  }

  toggleTask(task: Task): void {
    if (!task.id) return;

    this.taskService.toggleTaskCompletion(task.id).subscribe({
      next: (updatedTask) => {
        const index = this.tasks.findIndex(t => t.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
      },
      error: (err) => console.error('Erreur lors du changement de statut de la tâche', err)
    });
  }

  deleteTask(taskId: string | undefined): void {
    if (!taskId) return;

    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      error: (err) => console.error('Erreur lors de la suppression de la tâche', err)
    });
  }
}

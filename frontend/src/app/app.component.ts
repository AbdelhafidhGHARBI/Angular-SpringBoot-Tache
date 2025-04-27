import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projet-tache';
  tasks: Task[] = [];
  newTaskContent = '';
  isLoading = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe({
      next: (donneejeyamelbackend) => {
        this.tasks = donneejeyamelbackend;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading tasks', err);
        this.isLoading = false;
      }
    });
  }

  addTask(): void {
    if (!this.newTaskContent.trim()) return;

    const newTask: Task = {
      content: this.newTaskContent,
      completed: false
    };

    this.taskService.createTask(newTask).subscribe({
      next: (task) => {
        this.tasks.push(task);
        this.newTaskContent = '';
      },
      error: (err) => console.error('Error adding task', err)
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
      error: (err) => console.error('Error toggling task', err)
    });
  }

  deleteTask(taskId: string | undefined): void {
    if (!taskId) return;

    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      error: (err) => console.error('Error deleting task', err)
    });
  }
  
}

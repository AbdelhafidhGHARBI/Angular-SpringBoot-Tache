package tn.esprit.projettachebackend.service;

import tn.esprit.projettachebackend.entities.Task;

import java.util.List;

public interface TaskService {
    Task createTask(Task task);
    List<Task> getAllTasks();
    Task getTaskById(String id);
    Task updateTask(String id, Task task);
    void deleteTask(String id);
    Task toggleTaskCompletion(String id);
}

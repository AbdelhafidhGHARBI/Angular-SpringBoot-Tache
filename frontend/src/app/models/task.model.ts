export interface Task {
    id?: string; // Optionnel car généré par MongoDB
    content: string;
    completed: boolean;
  }
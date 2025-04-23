class Task {
  id: string;
  label: string;
  completed: boolean;

  constructor(id: string, label: string, completed: boolean = false) {
    this.id = id;
    this.label = label;
    this.completed = completed;
  }
}

export default Task;
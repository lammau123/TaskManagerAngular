import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];
  isShowAddTask: boolean = false;
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(){
    this.isShowAddTask = true;
  }

  deleteTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  insertTask(task: Task){
    this.tasks.push(task);
  }
}

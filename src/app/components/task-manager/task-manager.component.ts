import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[];
  isShowAddTask: boolean = false;
  currentPage: number = 1;
  pageSize: number = 5;
  numberOfPages: number[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTotalRows().subscribe(rows => this.numberOfPages = Array.from({length: Math.ceil(rows/this.pageSize)}).map((_, index) => (index+1)*this.pageSize));
    this.taskService.getTasks((this.currentPage - 1)*this.pageSize, this.pageSize).subscribe(tasks => this.tasks = tasks);
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

  currentPageChanged(no: number){
    this.currentPage = no;
    this.taskService.getTasks((this.currentPage - 1)*this.pageSize, this.pageSize).subscribe(tasks => this.tasks = tasks);
  }
}

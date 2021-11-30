import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(id: string){
    this.deleteEvent.emit(id);
  }
}

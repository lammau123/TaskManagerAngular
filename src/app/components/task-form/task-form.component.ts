import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  formGroup!: FormGroup;
  @Output() taskEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      scheduleName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),
      time: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    this.taskEvent.emit({name: this.scheduleName.value, schedule: new Date(this.time.value)});
    this.clear();
  }

  get scheduleName() {
    return this.formGroup.get('scheduleName');
  }

  get time() {
    return this.formGroup.get('time');
  }

  clear(){
    this.formGroup.get('scheduleName').reset();
    this.formGroup.get('time').reset();
  }
}

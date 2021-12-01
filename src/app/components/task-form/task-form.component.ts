import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  formGroup = new FormGroup({
    scheduleName: new FormControl(''),
    time: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("on submit");
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  formGroup!: FormGroup;

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
    console.log(this.formGroup.controls['scheduleName'].errors?.['required']);
  }

  get scheduleName() {
    return this.formGroup.get('scheduleName');
  }

  get time() {
    return this.formGroup.get('time');
  }
}

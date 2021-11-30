import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    {id: "1", name: 'Doctor Appointment', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "2", name: 'Dentist Appointment', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "3", name: 'Tennis Appointment', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "4", name: 'Tennis Appointment', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "5", name: 'Tennis Appointment', schedule: new Date('11/25/2014 00:00:00 GMT')},
  ];
  constructor() {}

  getTasks(): Observable<Task[]>{
    return new Observable<Task[]>(subscriber => {
      subscriber.next(this.tasks);
      subscriber.complete();
    });
  }
}

import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    {id: "1", name: 'Doctor Appointment1', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "2", name: 'Dentist Appointment2', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "3", name: 'Tennis Appointment3', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "4", name: 'Tennis Appointment4', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "5", name: 'Tennis Appointment5', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "6", name: 'Tennis Appointment6', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "7", name: 'Tennis Appointment7', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "8", name: 'Tennis Appointment8', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "9", name: 'Tennis Appointment9', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "10", name: 'Tennis Appointment10', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "11", name: 'Tennis Appointment11', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "12", name: 'Tennis Appointment12', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "13", name: 'Tennis Appointment13', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "14", name: 'Tennis Appointment14', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "15", name: 'Tennis Appointment15', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "16", name: 'Tennis Appointment16', schedule: new Date('11/25/2014 00:00:00 GMT')},
    {id: "17", name: 'Tennis Appointment17', schedule: new Date('11/25/2014 00:00:00 GMT')},
  ];
  constructor() {}

  getTasks(offset: number, rows: number): Observable<Task[]>{
    return new Observable<Task[]>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.tasks.slice(offset, offset + rows));
        subscriber.complete();
      }, 1000);
    });
  }

  getTotalRows(): Observable<number>{
    return new Observable<number>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.tasks.length);
        subscriber.complete();
      }, 1000);
    });
  }
}

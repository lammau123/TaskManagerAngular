import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

type ResponseData = {
  tasks?: Task[]
  totalTasks?: number
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}

  getTasks(page: number, rows: number): Observable<Task[]>{
    return this.httpClient.get<ResponseData>(`${environment.taskService}/?page=${page}&page-size=${rows}`)
                          .pipe(map(res => res.tasks));
  }

  getTotalRows(): Observable<number>{
    return this.httpClient.get<ResponseData>(`${environment.taskService}/totalTasks`)
                          .pipe(map(res => res.totalTasks));
  }
}

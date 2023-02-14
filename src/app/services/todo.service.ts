import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasksUrl: string = 'https://delunico-taskmanager.up.railway.app/tasks';
  constructor(private http: HttpClient) {}

  // Get todos
  getTasks(listId): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}/${listId}`);
  }

  // Toggle Completed
  toggleCompleted(id: number): Observable<any> {
    return this.http.put(`${this.tasksUrl}/${id}`, httpOptions);
  }

  // Delete Todo
  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.tasksUrl}/${id}`, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }

  editTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, httpOptions);
  }
}

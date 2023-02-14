import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from '../models/List';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListService {
  listsUrl: string = 'https://delunico-taskmanager.up.railway.app/lists';
  constructor(private http: HttpClient) {}

  // Get Lists
  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.listsUrl}`);
  }

  // Update List
  updateList(list: List): Observable<List> {
    const url = `${this.listsUrl}`;
    return this.http.put<List>(url, list, httpOptions);
  }

  // Delete List
  deleteList(id: number): Observable<List> {
    const url = `${this.listsUrl}/${id}`;
    return this.http.delete<List>(url, httpOptions);
  }
  // Add List
  addList(list: List): Observable<List> {
    return this.http.post<List>(this.listsUrl, list, httpOptions);
  }
}

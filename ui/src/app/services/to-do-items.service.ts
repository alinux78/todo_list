
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


export interface ToDoItem {
  id: string;
  done: boolean;
	summary: string;
	details?: number;
	dueDate?: number;
  createdAt: number;
}

let items: Array<ToDoItem> = []

const  API_URL = "http://localhost:8081"

@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {

  constructor(private http: HttpClient) { }

  get() {
    let url = `${API_URL}/todos`
    return this.http.get<Array<ToDoItem>>(url);
  }

  save(item: ToDoItem) {
    if (!item.id) {
      item.id = uuidv4();
      items.push(item);
    } else {
      let idx = items.findIndex(i => i.id == item.id);
      items[idx] = item;
    }
  }

  delete(item: ToDoItem) {
    let idx = items.findIndex(i => i.id == item.id);
    if (idx >=0) {
      items.splice(idx, 1);
    }
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface ToDoItem {
  id: string;
  done: boolean;
	summary: string;
	details?: number;
	dueDate?: number;
  createdAt: number;
}

let items: Array<ToDoItem> = []

//TODO externalize this in env var
const  API_URL = "http://localhost:8082/todos"

@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Array<ToDoItem>>(API_URL);
  }

  save(item: ToDoItem) {
    console.log("saving item")
    if (!item.id) {
      this.http.post(API_URL, item).subscribe( data => {
        //TODO imprive reload
        window.location.reload();
      });
    } else {
      this.http.put(API_URL, item).subscribe(data => {
        //TODO imprive reload
        window.location.reload();
      });
    }
  }

  delete(item: ToDoItem) {
    console.log("deleting item");
    const url = `${API_URL}/${item.id}`;
    console.log(`url = ${url}`);
    this.http.delete(url).subscribe(data => {
      //TODO imprive reload
      window.location.reload();
    });
  }
}


import { EventEmitter, Injectable } from '@angular/core';
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

  itemsChanged: EventEmitter<boolean> = new EventEmitter();
  selectedItenChanged: EventEmitter<string> = new EventEmitter();
  selectedItem: ToDoItem;

  constructor(private http: HttpClient) { }


  setSelectedItem(item?: ToDoItem) {
    this.selectedItem = item;
    this.selectedItenChanged.emit(this.selectedItem?.id);
  }


  get() {
    return this.http.get<Array<ToDoItem>>(API_URL);
  }

  save(item: ToDoItem) {
    if (!item.id) {
      this.http.post(API_URL, item).subscribe( data => {
        this.itemsChanged.emit(true);
      });
    } else {
      this.http.put(API_URL, item).subscribe(data => {
        this.itemsChanged.emit(true);
      });
    }
  }

  delete(item: ToDoItem) {
    const url = `${API_URL}/${item.id}`;
    this.http.delete(url).subscribe(data => {
      this.itemsChanged.emit(true);
    });
  }
}

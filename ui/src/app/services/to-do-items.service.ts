
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';


export interface ToDoItem {
  id: string;
  done: boolean;
	summary: string;
	details?: number;
	dueDate?: number;
  createdAt: number;
}

let items: Array<ToDoItem> = []

const  API_URL = `/api/todos`

@Injectable({
  providedIn: 'root',
})
export class ToDoItemsService {
  itemsChanged: EventEmitter<boolean> = new EventEmitter();
  selectedItenChanged: EventEmitter<string> = new EventEmitter();
  selectedItem: ToDoItem;
  pageSize = 5;
  currentPage = 0;

  constructor(private http: HttpClient) {}

  setSelectedItem(item?: ToDoItem) {
    this.selectedItem = item;
    this.selectedItenChanged.emit(this.selectedItem?.id);
  }

  get() {
    const url = `${API_URL}?page=${this.currentPage}&size=${this.pageSize}`;
    return this.http.get<Array<ToDoItem>>(url);
  }

  getCount() {
    const url = `${API_URL}/count`;
    return this.http.get<{count:number}>(url);
  }

  nextPage() {
    this.currentPage++;
    this.itemsChanged.emit(true);
  }

  prevPage() {
    if (this.currentPage == 0) {
      return;
    }
    this.currentPage--;
    this.itemsChanged.emit(true);
  }

  save(item: ToDoItem) {
    if (!item.id) {
      this.http.post(API_URL, item).subscribe((data) => {
        this.itemsChanged.emit(true);
      });
    } else {
      this.http.put(API_URL, item).subscribe((data) => {
        this.itemsChanged.emit(true);
      });
    }
  }

  delete(item: ToDoItem) {
    const url = `${API_URL}/${item.id}`;
    this.http.delete(url).subscribe((data) => {
      this.itemsChanged.emit(true);
    });
  }
}

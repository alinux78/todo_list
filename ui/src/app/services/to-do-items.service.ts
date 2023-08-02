
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
  providedIn: 'root'
})
export class ToDoItemsService {

  itemsChanged: EventEmitter<boolean> = new EventEmitter();
  selectedItenChanged: EventEmitter<string> = new EventEmitter();
  selectedItem: ToDoItem;

  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }


  setSelectedItem(item?: ToDoItem) {
    this.selectedItem = item;
    this.selectedItenChanged.emit(this.selectedItem?.id);
  }


  get() {
    return this.http.get<Array<ToDoItem>>(API_URL, this.options());
  }

  save(item: ToDoItem) {
    if (!item.id) {
      this.http.post(API_URL, item, this.options()).subscribe( data => {
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
    this.http.delete(url, this.options()).subscribe(data => {
      this.itemsChanged.emit(true);
    });
  }

  private options() {
    const headers = new HttpHeaders();
    //this.keycloakService.addTokenToHeader(headers);
    return {headers: headers};
  }
}

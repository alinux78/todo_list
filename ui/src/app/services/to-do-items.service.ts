
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


export interface ToDoItem {
  id: string;
  done: boolean;
	summary: string;
	details?: number;
	dueDate?: Date;
  createdAt: Date;
}

let items: Array<ToDoItem> = [
  {
    id: "1",
    done: true,
    summary: "Buy groceries for next week",
    createdAt: new Date()
  },
  {
    id: "2",
    done: false,
    summary: "Renew car insurance",
    dueDate: new Date((new Date().getTime() + 7 * 24 * 60 * 60 * 1000)),
    createdAt: new Date()
  },
  {
    id: "3",
    done: false,
    summary: "Sign up for online course",
    createdAt: new Date()
  },
  {
    id: "4",
    done: true,
    summary: "Buy Christmas presents",
    createdAt: new Date()
  }


]


@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {

  constructor() { }

  get() {
    return from([items]);
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


import { Injectable } from '@angular/core';


export interface ToDoItem {
  done: boolean;
	summary: string;
	details?: number;
	dueDate?: Date;
  createdAt: Date;
}

let items: Array<ToDoItem> = [
  {
    done: true,
    summary: "Buy groceries for next week",
    createdAt: new Date()
  },
  {
    done: false,
    summary: "Renew car insurance",
    dueDate: new Date((new Date().getTime() + 7 * 24 * 60 * 60 * 1000)),
    createdAt: new Date()
  },
  {
    done: false,
    summary: "Sign up for online course",
    createdAt: new Date()
  },
  {
    done: false,
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
    return items.slice();
  }
}

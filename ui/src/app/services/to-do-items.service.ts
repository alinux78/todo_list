
import { Injectable } from '@angular/core';


export interface ToDoItem {
  done: boolean;
	summary: string;
	details?: number;
	dueDate?: Date;
}

let items: Array<ToDoItem> = [
  {
    done: true,
    summary: "Buy groceries for next week",
  },
  {
    done: false,
    summary: "Renew car insurance",
    dueDate: new Date((new Date().getTime() + 7 * 24 * 60 * 60 * 1000))
  },
  {
    done: false,
    summary: "Sign up for online course"
  },
  {
    done: false,
    summary: "Buy Christmas presents"
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

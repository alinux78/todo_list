import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../services/to-do-items.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: ToDoItem;

  constructor() { }

  toggleDone() {
    this.item.done = !this.item.done;
    //TODO - use service to save item

  }

  ngOnInit(): void {
  }

}

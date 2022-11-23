import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: ToDoItem;

  isEditMode = false;

  constructor(private itemsService:ToDoItemsService) { }

  toggleDone() {
    this.item.done = !this.item.done;
    this.saveItem();
  }

  enableEdit() {
    this.isEditMode = true
  }

  disableEdit() {
    this.isEditMode = false
  }

  saveItem() {
    this.itemsService.save(this.item);
  }

  ngOnInit(): void {
  }

}

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
  summary: string
  dueDate: Date;

  constructor(private itemsService:ToDoItemsService) { }

  toggleDone() {
    this.item.done = !this.item.done;
    this.saveItem();
  }

  enableEdit() {
    this.summary = this.item.summary;
    this.isEditMode = true;
    this.dueDate = this.item.dueDate;
  }

  disableEdit() {
    this.isEditMode = false;
  }

  saveItem() {
    this.item.summary = this.summary;
    this.itemsService.save(this.item);
    this.item.dueDate = this.dueDate;
  }

  deleteItem() {
    this.itemsService.delete(this.item);
  }

  ngOnInit(): void {
    this.summary = this.item.summary;
  }

}

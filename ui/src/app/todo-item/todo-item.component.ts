import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
    if ( this.item.dueDate) {
      this.dueDate = new Date(this.item.dueDate);
    }
  }

  disableEdit() {
    this.isEditMode = false;
    this.summary = null;
    this.dueDate = null;
  }

  clearDueDate() {
    this.dueDate = null;
  }

  saveItem() {
    this.item.summary = this.summary;
    this.itemsService.save(this.item);
    this.item.dueDate = this.dueDate?.getTime();
  }

  deleteItem() {
    this.itemsService.delete(this.item);
  }

  ngOnInit(): void {
    this.summary = this.item.summary;
  }

}

import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  summary:string;

  constructor(private service:ToDoItemsService) { }

  ngOnInit(): void {
  }

  addItem() {
    if (!this.summary) {
      return;
    }

    const item: ToDoItem = {
      id: null,
      done: false,
      summary: this.summary,
      createdAt: new Date()
    }

    this.service.save(item);
    this.summary = null;
  }

}

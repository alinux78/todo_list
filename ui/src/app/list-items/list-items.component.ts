import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Array<ToDoItem>

  constructor(private service:ToDoItemsService) { }

  ngOnInit(): void {
    this.items = this.service.get();
  }

}

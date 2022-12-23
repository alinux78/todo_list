import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Array<ToDoItem>

  constructor(private service:ToDoItemsService) {
    this.service.itemsChanged.subscribe(value => {
      this.refreshItems();
    });
   }

  ngOnInit(): void {
    this.refreshItems();
  }

  private refreshItems(): void {
    this.service.get().subscribe( items => this.items = items);
  }

}

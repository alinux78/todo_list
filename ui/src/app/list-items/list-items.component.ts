import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  items: Array<ToDoItem>;

  constructor(private service: ToDoItemsService) {
    this.service.itemsChanged.subscribe((value) => {
      this.refreshItems();
    });
  }

  ngOnInit(): void {
    this.refreshItems();
  }

  nextPage() {
    this.service.nextPage();
  }

  prevPage() {
    this.service.prevPage();
  }

  hasNextPage() {
    return this.items.length == this.service.pageSize;
  }

  hasPrevPage() {
    return this.service.currentPage > 0;
  }

  private refreshItems(): void {
    this.service.get().subscribe((items) => (this.items = items));
    this.service.setSelectedItem(null);
  }
}

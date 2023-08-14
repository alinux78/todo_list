import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  items: Array<ToDoItem>;
  count: number;

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

  getPageStartIndex() {
    return this.service.currentPage * this.service.pageSize + 1;
  }

  getPageEndIndex() {
    const idx =
      this.service.currentPage * this.service.pageSize + this.service.pageSize;
    return Math.min(idx, this.count);
  }

  prevPage() {
    this.service.prevPage();
  }

  hasNextPage() {
    return (
      ((this.service.currentPage + 1) * this.service.pageSize != this.count)
      &&
      (this.items.length == this.service.pageSize)
    );
  }

  hasPrevPage() {
    return this.service.currentPage > 0;
  }

  private refreshItems(): void {
    this.service.getCount().subscribe((c) => (this.count = c.count));
    this.service.get().subscribe((items) => {
      this.items = items;
      if (this.items.length == 0 && this.hasPrevPage()) {
        this.prevPage();
      }
  });
    this.service.setSelectedItem(null);
  }
}

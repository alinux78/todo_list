import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoItem, ToDoItemsService } from '../services/to-do-items.service';
import { ConfirmationDialog } from '../util/confirmation-dialog.component';

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

  @ViewChild('editsummary') editSummary: ElementRef;

  constructor(private itemsService:ToDoItemsService, private dialog: MatDialog) { }

  toggleDone() {
    this.item.done = !this.item.done;
    this.saveItem();
  }

  enableEdit() {
    this.summary = this.item.summary;
    this.isEditMode = true;
    if (this.item.dueDate) {
      this.dueDate = new Date(this.item.dueDate);
    }
    console.log("FOCUS");
    setTimeout(
      () => this.editSummary.nativeElement.focus(),
      10
    );
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
    if (this.dueDate) {
      this.item.dueDate = this.dueDate?.getTime();
    } else {
      this.item.dueDate = null;
    }
    this.itemsService.save(this.item);
  }

  deleteItem() {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'This item will be deleted.'
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.itemsService.delete(this.item);
      }
    });
  }

  ngOnInit(): void {
    this.summary = this.item.summary;
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HeaderComponent } from './header/header.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ToDoItemsService } from './services/to-do-items.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialog } from './util/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    HeaderComponent,
    ListItemsComponent,
    TodoItemComponent,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    ...materialModules
  ],
  providers: [
    ToDoItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

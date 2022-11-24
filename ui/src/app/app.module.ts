import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HeaderComponent } from './header/header.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ToDoItemsService } from './services/to-do-items.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    HeaderComponent,
    ListItemsComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ToDoItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

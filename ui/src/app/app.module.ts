import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationDialog } from './util/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';

import { initializer } from 'src/utils/app-inits';
import { HttpErrorInterceptor } from './util/http-error-interceptor';

const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    HeaderComponent,
    ListItemsComponent,
    TodoItemComponent,
    ConfirmationDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),
    MatDialogModule,
    MatButtonModule,
    ...materialModules,
  ],
  providers: [
    ToDoItemsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoard } from './components/dashboard.component';
import { EditUsers } from './components/EditUsers.component';
import { UsersList } from './components/UsersList.component';
import { UserListItem } from './components/UserListItem.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoard,
    EditUsers,
    UsersList,
    UserListItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { EditUsers } from './EditUsers.component';
import { UsersList } from './UsersList.component';

@Component({
    selector: '',
    template: '{UsersList}',
    styleUrls: ['./test.component.css']
})

export class DashBoard {
    public userList = ["Leanne Graham", "Ervin Howell"]
}

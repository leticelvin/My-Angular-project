import { Component, Input } from '@angular/core';
import { UsersList } from './UsersList.component';

@Component({
    selector: 'app-root',
    template: '{UsersList}',
    styleUrls: ['./test.component.css']
})

export class DashBoard {

    userList: Array<string>;
    userList = new Array("Leanne Graham", "Ervin Howell");

    @Input()

    adduser() { }

    removeuser() { }
}

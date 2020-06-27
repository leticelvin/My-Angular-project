import { Component, Input, Output } from '@angular/core';
import { UsersList } from './UsersList.component';

@Component({
    selector: 'app-root',
    template: '{{UsersList}}',
    styleUrls: ['./test.component.css']
})

export class DashBoard {

    /*userList: Array<string>;*/
    @Output() userList: string[] = ["Leanne Graham", "Ervin Howell"];

    @Input()

    adduser() { }

    removeuser() { }
}

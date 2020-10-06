import { Component, Input } from '@angular/core';
/*import { userList } from './dashboard.component';*/

@Component({
    selector: "UserListItem",
    template: `<li *ngFor="let User of user" class="userlistitem"><p [style.color]="textcolor" >{{user}}</p></li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {

    /*<li *ngFor="let user of userList"*/ 
    @Input('userList') public user: Array<string>;
    @Input('TextColor') public textcolor: String;
}
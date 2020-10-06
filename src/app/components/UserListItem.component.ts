import { Component, Input } from '@angular/core';
import { DashBoard } from './dashboard.component';

@Component({
    selector: "UserListItem",
    template: `<li class="userlistitem" [style.color]="textcolor"><p class="redtext">{{user}}</p></li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {

    /*<li *ngFor="let user of userList"*/ 
    @Input('userList') public user: String;
    @Input('TextColor') public textcolor: String;
}
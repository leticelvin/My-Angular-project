import { Component, Input, OnInit } from '@angular/core';
/*import { userList } from './dashboard.component';*/

@Component({
    selector: "UserListItem",
    template: `<li *ngFor="let User of user" class="userlistitem"><p [style.color]="textcolor" >{{user}}</p></li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem implements OnInit {
    /*@Input('userList') public user: Array<string>;*/ 
    /*<li *ngFor="let user of userList"*/ 
    @Input('userList') public user: string[]; //Imports the user list array from the dashboard component
    @Input('TextColor') public textcolor: String; // Imports the color of the text as a string

    ngOnInit() {console.log(this.user)}
}
import { Component, Input } from '@angular/core';

@Component({
    selector: "UserListItem",
    template: `<li *ngFor="let User of user" class="userlistitem"><p [style.color]="textcolor" >{{User}}</p></li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {
    
    @Input('userlist') public user: Array<string>; // Imports the user list array from the dashboard component
    @Input('Textcolor') public textcolor: String; //  Imports the color of the text as a string
    @Input('newuser') public Newuser: String;    //   Imports new user

    
}
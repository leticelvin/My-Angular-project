import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: "UserListItem",
    template: `<li *ngFor="let User of user" class="userlistitem"><p [style.color]="textcolor" >{{User}}</p></li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem implements OnInit {
    /*@Input('userList') public user: Array<string>;*/ 
    /*<li *ngFor="let user of userList"*/ 
    /* string[] */ 
    @Input('userlist') public user: Array<string>; //Imports the user list array from the dashboard component
    @Input('Textcolor') public textcolor: String; // Imports the color of the text as a string

    ngOnInit() {
        console.log("UserListItem: " + this.user)
        console.log("UserListItem textcolor : " + this.textcolor)
    }
    
}
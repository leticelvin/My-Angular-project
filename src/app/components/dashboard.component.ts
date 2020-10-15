import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'DashBoard',
    template: '<UsersList [userlist]="userList"></UsersList><EditUsers (AddUser)="receiveMessage($event)" (removeUser)="Remove()"></EditUsers>',
    styleUrls: ['./test.component.css']
})

export class DashBoard implements OnInit {
    //DashBoard är parent-komponenten för alla komponenter och tar emot.... 
    //...vilken användare som ska läggas till i listan från EditUsers
    //Och innehåller arrayen som är en lista över användare.
    
    public userList: Array<string> = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"];
    public newUser: string;

    @Output() public Event = new EventEmitter();

    ngOnInit() {
        this.Event.emit(this.userList)
    }

    receiveMessage($event) {
        this.newUser = $event
        this.userList.unshift(this.newUser)
        this.Event.emit(this.userList)
    }

    Remove() {
        this.userList.pop();
        console.log(this.userList)
        this.Event.emit(this.userList)  
    }

}

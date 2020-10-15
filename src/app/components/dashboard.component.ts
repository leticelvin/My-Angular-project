import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'DashBoard',
    template: '<UsersList [userlist]="userList"></UsersList><EditUsers></EditUsers>',
    styleUrls: ['./test.component.css']
})

export class DashBoard implements OnInit {

    // <UsersList [userlist]="userList">

    public userList: Array<string> = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"];

    @Output() public Event = new EventEmitter();

    @Input('removeStatus') public removal: String;
    @Input('newUser') public NewUser: string;

    constructor() { }

    ngOnInit() {
        this.Event.emit(this.userList)
    }

    pushuser() {
    this.userList.unshift(this.NewUser)
    this.Event.emit(this.userList)
    }

    removeuser() {
    this.userList.pop;    
    }


}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'DashBoard',
    template: '',
    styleUrls: ['./test.component.css']
})

export class DashBoard implements OnInit {

    /*userList: Array<string>;*/
    @Output() public Event = new EventEmitter();

    userList: string[] = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"];

    ngOnInit() {
        this.Event.emit(this.userList)
        alert(this.userList)
    }

    constructor() { }

    @Input('newUser') public NewUser: string;

    pushuser() {
    this.userList.unshift(this.NewUser)
    }

    removeuser() {
    this.userList.pop;    
    }

    @Input('removeStatus') public removal: String;
}

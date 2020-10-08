import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'DashBoard',
    template: '',
    styleUrls: ['./test.component.css']
})

export class DashBoard implements OnInit {

    /*userList: Array<string>;*/
    @Output() public Event = new EventEmitter();

    public userlist: Array<string> = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"];

    ngOnInit() {
        this.Event.emit(this.userlist)
        alert(this.userlist)
    }

    constructor() { }

    @Input('removeStatus') public removal: String;
    @Input('newUser') public NewUser: string;

    pushuser() {
    this.userlist.unshift(this.NewUser)
    }

    removeuser() {
    this.userlist.pop;    
    }


}

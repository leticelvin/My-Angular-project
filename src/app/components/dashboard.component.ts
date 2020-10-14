import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'DashBoard',
    templateUrl: 'todo.component.html',
    styleUrls: ['./test.component.css']
})

export class DashBoard implements OnInit {

    public userlist: Array<string> = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"];

    @Output() public Event = new EventEmitter();

    @Input('removeStatus') public removal: String;
    @Input('newUser') public NewUser: string;

    constructor() { }

    ngOnInit() {
        this.Event.emit(this.userlist)
        alert(this.userlist)
    }

    pushuser() {
    this.userlist.unshift(this.NewUser)
    }

    removeuser() {
    this.userlist.pop;    
    }


}

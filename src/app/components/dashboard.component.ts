import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'DashBoard',
    template: '',
    styleUrls: ['./test.component.css']
})

export class DashBoard {

    /*userList: Array<string>;*/
    @Output() public Event = new EventEmitter();

    userList: string[] = ["Leanne Graham", "Ervin Howell"];

    sendArray() {
        this.Event.emit(this.userList)
    }

    constructor() { }

    @Input('newUser') public NewUser: String;

    @Input('removeStatus') public removal: String;
}

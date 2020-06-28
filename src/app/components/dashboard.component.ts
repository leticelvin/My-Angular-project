import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '',
    styleUrls: ['./test.component.css']
})

export class DashBoard {

    /*userList: Array<string>;*/
    @Output() public Event = new EventEmitter();

    userList: string[] = ["Leanne Graham", "Ervin Howell"];

    constructor() { }

    @Input()

    adduser() { }

    removeuser() { }
}

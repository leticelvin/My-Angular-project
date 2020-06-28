import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserListItem } from './UserListItem.component'

@Component({
    selector: "app-root",
    template: `<div id="LeftGreyBox">
        <ul>
            {{UserListItem}}
        </ul>
        <button onclick="toggleColor()" id="ToggleColorsButton">Toggle Colors</button></div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    @Input('userList') userList: any

    @Output() public Event = new EventEmitter();
    @Output() public ColorToggle = new EventEmitter();

    togglecolor() {
        this.ColorToggle.emit("Color has changed")
    }

    ngOnInit() {

    }

    fireEvent() {
        this.Event.emit("Hello!")
    }

}    

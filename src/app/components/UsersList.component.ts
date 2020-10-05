import { Component, Input, Output, OnInit, EventEmitter, ContentChildren } from '@angular/core';
import { UserListItem } from './UserListItem.component';

@Component({
    selector: "app-root",
    template: `<div id="LeftGreyBox">
        <ul>
            {{ UserListItemComponent }}
        </ul>
        <button onclick="toggleColor()" id="ToggleColorsButton">Toggle Colors</button>
        </div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    @Input('userList') userList: any
    @ContentChildren(UserListItem)
    UserListItemComponent: UserListItem;

    @Output() public SendUser = new EventEmitter();
    @Output() public ColorToggle = new EventEmitter();

    public TextColor = "green";

    constructor(){}

    togglecolor() {

        if (this.TextColor = "red") {
            this.TextColor = "green";
        } else {
            this.TextColor = "red";
        }

        this.ColorToggle.emit(this.TextColor)
    }

    ngOnInit() {

    }

    fireEvent() {
        this.SendUser.emit("Hello!")
    }

}    

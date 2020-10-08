import { Component, Output, EventEmitter, ContentChildren } from '@angular/core';
import { UserListItem } from './UserListItem.component';

@Component({
    selector: "UsersList",
    template: `<div id="LeftGreyBox">
        <ul>
            {{ UserListItemComponent }}
        </ul>
        <button onclick="toggleColor()" id="ToggleColorsButton"><h4>Toggle Colors</h4></button>
        </div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    //@Input('userList') userList: any
    @ContentChildren(UserListItem)
    UserListItemComponent: UserListItem;

    @Output() public ColorToggle = new EventEmitter();

    public TextColor = "green";

    constructor(){}

    toggleColor() {

        if (this.TextColor = "red") {
            this.TextColor = "green";
        } else {
            this.TextColor = "red";
        }

        this.ColorToggle.emit(this.TextColor)
    }

}    

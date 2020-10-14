import { Component, Output, EventEmitter, ContentChildren } from '@angular/core';
import { UserListItem } from './UserListItem.component';

@Component({
    selector: "UsersList",
    template: `<div id="LeftGreyBox">
        <ul>
            {{ UserListItemComponent }}
        </ul>
        <button (click)="toggleColor()" id="ToggleColorsButton"><h4>Toggle Colors</h4></button>
        </div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    
    // <UserListItem [userList]="userlist">

    public Toggled: Boolean = true;
    public TextColor: String = "red";
    
    //@Input('userList') userList: any
    @ContentChildren(UserListItem)
    UserListItemComponent: UserListItem;

    @Output() public ColorToggle = new EventEmitter();

    constructor(){}

    toggleColor() {

        if (this.Toggled != false) {
            this.Toggled = false;
            this.TextColor = "green";
            this.ColorToggle.emit(this.TextColor)
            console.log(this.TextColor)
            console.log(this.Toggled)
        } 
        else {
            this.Toggled = true;
            this.TextColor = "red";
            this.ColorToggle.emit(this.TextColor)
            console.log(this.TextColor)
            console.log(this.Toggled)
        }

    }

}    

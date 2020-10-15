import { Component, Output, EventEmitter, Input, ContentChildren } from '@angular/core';
import { UserListItem } from './UserListItem.component';

@Component({
    selector: "UsersList",
    template: `<div id="LeftGreyBox">
                    <ul>
                        <UserListItem [userlist]="user" [Textcolor]="TextColor"></UserListItem>
                    </ul>
                    <div id="dynamicfiller">
                        <button (click)="toggleColor()" id="ToggleColorsButton">
                            <h4>Toggle Colors</h4>
                        </button>
                    </div>
                </div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    
    public Toggled: Boolean = true;
    public TextColor: String = "red";
    
    @Input('userlist') public user: Array<string>;
    
    @ContentChildren(UserListItem)
    UserListItemComponent: UserListItem;

    @Output() public ColorToggle = new EventEmitter();

    toggleColor() {

        if (this.Toggled != false) {
            this.Toggled = false;
            this.TextColor = "green";
            this.ColorToggle.emit(this.TextColor)
        
        } else {
            this.Toggled = true;
            this.TextColor = "red";
            this.ColorToggle.emit(this.TextColor)
        }

    }

}    

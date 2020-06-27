import { Component, Input, Output } from '@angular/core';
import { UserListItem } from './UserListItem.component'

@Component({
    selector: "app-root",
    template: `<div id="LeftGreyBox">
        <ul>
            {{UserListItem}}
        </ul>
        <button [style.color]=colors[i] id="ToggleColorsButton">Toggle Colors</button></div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    @Input('userList') userList: any

    @Output()

}

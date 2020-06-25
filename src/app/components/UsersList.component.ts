import { Component, Input } from '@angular/core'

@Component({
    selector: "app-root",
    template: `<div id="LeftGreyBox">
        <ul>
            {UserListItem}
        </ul>
        <button [style.color]=colors[i] id="ToggleColorsButton">Toggle Colors</button>
        </div>`,
    styleUrls: ['./test.component.css']
})

export class UsersList {
    @Input() users: Array;

}

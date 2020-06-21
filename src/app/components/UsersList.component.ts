import { Component } from '@angular/core'

@Component({
    selector: " ",
    template: `<div id="LeftGreyBox">
        <ul>
            {UserListItem}
        </ul>
        <button [style.color]=colors[i] id="ToggleColorsButton">Toggle Colors</button>
        </div>`
styleUrls: ['./test.component.css']
})

export class UsersList {

}

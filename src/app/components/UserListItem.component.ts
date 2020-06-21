import { Component } from '@angular/core';

@Component({
    selector: '',
    template: `<li class="userlistitem" [style.color]="ToggleColor">{name}</li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {
    public TextColor = "green"
    public name = "Tanri en Buyuktur"
}
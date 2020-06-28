import { Component, Input } from '@angular/core';

@Component({
    selector: "app-root",
    template: `<li class="userlistitem" [style.color]="TextColor">{{name}}</li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {
    public name: string = "Tanri en Buyuktur"

    @Input('parentData') public user;
    @Input() public TextColor: String;
}
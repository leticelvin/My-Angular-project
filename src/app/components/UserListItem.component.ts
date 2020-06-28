import { Component, Input } from '@angular/core';

@Component({
    selector: "app-root",
    template: `<li class="userlistitem" [style.color]="TextColor">{{user}}</li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {

    @Input('parentData') public user: String;
    @Input('TextColor') public textcolor: String;
}
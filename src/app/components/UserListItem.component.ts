import { Component, Input } from '@angular/core';

@Component({
    selector: "UserListItem",
    template: `<li class="userlistitem" [style.color]="textcolor">{{user}}</li>`,
    styleUrls: ['./test.component.css']
})

export class UserListItem {

    @Input('parentData') public user: String;
    @Input('TextColor') public textcolor: String;
}
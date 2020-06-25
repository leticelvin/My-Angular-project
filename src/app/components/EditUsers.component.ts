import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "app-root",
    template: `<div id="RightGreyBox">
        < input id="writeUser" type="text" placeholder="new user..." >
            <button id="greenbutton" (click)="AddUser(writeUser.value)"> Add < /button>
                < button id="redbutton" (click)="RemoveUser()"> Remove < /button>
                    < /div>`,
    styleUrls: ['./test.component.css']
})

export class EditUsers {
    @Output() public childEvent = new EventEmitter();

    @Output() AddUser(value) {
        userList.push(writeUser.value)
    }

    @Output() RemoveUser() {
        userList.pop();
    }

    fireEvent() {
        this.childEvent.emit("Hey Codevolution");
    }
}
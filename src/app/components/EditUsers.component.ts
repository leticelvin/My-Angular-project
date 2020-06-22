import { Component } from '@angular/core';

@Component({
    selector: "app-root",
    template: `<div id="RightGreyBox">
        < input #writeUser type = "text" placeholder="new user..." >
            <button id="greenbutton" (click)="AddUser(writeUser.value)"> Add < /button>
                < button id="redbutton" (click)="RemoveUser()"> Remove < /button>
                    < /div>`,
    styleUrls: ['./test.component.css']
})

export class EditUsers {
    /*@Output() public childEvent = new EventEmitter();

    @output() AddUser(value) {
        userList.push(writeUser.value)
    }

    @output() RemoveUser() {
        userList.pop();
    }

    fireEvent() {
        this.childEvent.emit(Hey Codevolution);
    }*/
}
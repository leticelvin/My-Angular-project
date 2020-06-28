import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: "app-root",
    template: `<div id="RightGreyBox">
        < input #inputfield id="writeUser" type="text" value="new user..." >
            <button id="greenbutton" (click)="addUser(writeUser)"> Add < /button>
                < button id="redbutton" (click)="RemoveUser()"> Remove < /button>
                    < /div>`,
    styleUrls: ['./test.component.css']
})

export class EditUsers {

    @ViewChild('inputfield', { static: false }) nameElementRef: ElementRef;

    @Output() public AddUser = new EventEmitter();

    @Output() public removeUser = new EventEmitter();

    public newUser: String;
    public removeStatus = true;

    addUser(_value: String) {
        this.newUser = this.nameElementRef.nativeElement.value;
        this.AddUser.emit(this.newUser);
    }

    RemoveUser() {
        /* Delete last user */
        this.removeUser.emit(this.removeStatus);
    }

}
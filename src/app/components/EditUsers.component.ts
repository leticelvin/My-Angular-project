import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: "app-root",
    template: `<div id="RightGreyBox">
        < input #inputfield id="writeUser" type="text" value="new user..." >
            <button id="greenbutton" (click)="AddUser(writeUser.value)"> Add < /button>
                < button id="redbutton" (click)="RemoveUser()"> Remove < /button>
                    < /div>`,
    styleUrls: ['./test.component.css']
})

export class EditUsers {

    @ViewChild('inputfield', { static: false }) nameElementRef: ElementRef;

    @Output() public childEvent = new EventEmitter();

    @Output() AddUser(value) {
        this.nameElementRef.nativeElement.value
    }

    @Output() RemoveUser() {
        /* Delete last user */
    }

    fireEvent() {
        this.childEvent.emit("Hey Codevolution");
    }
}
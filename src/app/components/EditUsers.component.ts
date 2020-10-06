import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: "EditUsers",
    template: `
            <div id="RightGreyBox">
                <input #inputfield id="writeUser" type="text" value="new user..." >
                <button id="greenbutton" (click)="addUser($event)"><h4>Add</h4></button>
                <button id="redbutton" (click)="RemoveUser()"><h4>Remove</h4></button>
            </div>`,
    styleUrls: ['./test.component.css']
})

export class EditUsers {

    @ViewChild('inputfield', { static: false }) nameElementRef: ElementRef;

    @Output() public AddUser = new EventEmitter<String>(); 

    @Output() public removeUser = new EventEmitter();

    public newUser: String;
    public removeStatus = true;

    addUser(_value: String) {
        this.newUser = this.nameElementRef.nativeElement.value;
        this.AddUser.emit(this.newUser);
        console.log(this.newUser)
    }

    RemoveUser() {
        /* Delete last user */
        this.removeUser.emit(this.removeStatus);
    }

}
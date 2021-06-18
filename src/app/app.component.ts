import { Component, Output } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-first-app';
  userSelected:User = new User();

  showForm : boolean = false;

  constructor(){
  }

  updateUser(user:User){
    this.showForm = true;
    this.userSelected = user;
  }

  newUser(){
    this.userSelected = new User();
    this.showForm = true;
  }
}

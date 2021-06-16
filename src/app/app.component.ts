import { Component, Output } from '@angular/core';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-first-app';
  userSelected:any;

  constructor(){
   
  }

  updateUser(user:User){
    this.userSelected = user;
  }
}

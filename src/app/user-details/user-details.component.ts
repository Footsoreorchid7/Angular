import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user:User;
  constructor() { 
    
  }
  //@Input() user: User|undefined;

  ngOnInit(): void {
  }

  saveUser(){
    alert(this.user.id)
  }

}

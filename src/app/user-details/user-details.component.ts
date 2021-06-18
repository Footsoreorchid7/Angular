import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user:User;
  constructor(private UserService:UserService) { 
    
  }
  //@Input() user: User|undefined;

  ngOnInit(): void {
  }

  saveUser(){
    if(this.user.id > 0){
      this.UserService.updateUser(this.user);
    }
  }

}

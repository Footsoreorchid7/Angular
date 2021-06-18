import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  //@Input() user:User;
  private userCopy: User;
  private __user:User;
  @Input() set user(user:User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  };

get user(){
  return this.__user;
}

  constructor(private UserService:UserService) { 
    
  }
  //@Input() user: User|undefined;

  ngOnInit(): void {
  }

  saveUser(){
    if(this.user.id > 0){
      this.UserService.updateUser(this.user);
    }else{
      this.UserService.createUser(this.user);
    }
  }

  resetForm(form:any){
    if(this.user.id === 0){
      this.user = new User();
    }else{
      this.user = this.userCopy;
    }
  }

}


import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users/user.service';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user:any;
  @Output('onDeleteUser') userDeleted:any = new EventEmitter();
  constructor(private UserService:UserService) { 
    //this.user = ''
    //this.userDeleted=''
  }

  ngOnInit(): void {
  }

  deleteUser(){
    //alert(this.user.name);
    //this.UserService.deleteUser(this.user)
    this.userDeleted.emit(this.user)
  }
}

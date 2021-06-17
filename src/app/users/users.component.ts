/*Decoratore funzione che aggiunge cose ad una classe normale*/
import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    title= 'Utenti';
    users = Array();
    @Output('updateUser') updateUser = new EventEmitter<User>();
    constructor (private service: UserService){
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
    onDeleteUser(user:User){
        //alert(user.lastname)
        this.service.deleteUser(user)
    }
    onSelectUser(user:User){
        //alert(user.lastname)
        const userCopy = Object.assign({},user)
        this.updateUser.emit(userCopy)
    }
    
} /*Esportiamo il modulo per poterlo usare*/
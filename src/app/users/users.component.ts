/*Decoratore funzione che aggiunge cose ad una classe normale*/
import { Component, OnInit } from '@angular/core'; 
import { UserService } from './user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    title= 'Utenti';
    users = Array();
    
    constructor (private service: UserService){
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
    onDeleteUser(user:any){
        //alert(user.lastname)
        this.service.deleteUser(user)
    }

} /*Esportiamo il modulo per poterlo usare*/
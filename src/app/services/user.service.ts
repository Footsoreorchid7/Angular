import { Injectable } from "@angular/core";
import { User } from '../classes/User';
import { UserInterface } from "../interface/user";

@Injectable()
export class UserService{
user: User[] =
    [
        {
            id:1,
            name: 'Mario',
            lastname: 'Rossi',
            email: 'mario.rossi@gmail.com',
            fiscalcode: 'RSSMRA68M02A509I',
            phone: '03972976370',
            province: 'AV',
        },
        {
            id:2,
            name: 'Raffaella',
            lastname: 'Colombo',
            email: 'raffaella.colombo@jourrapide.com',
            fiscalcode: 'CLMRFL52S50E715N',
            phone: '03163610556',
            province: 'LU'
        },
        {
            id:3,
            name: 'Pierino',
            lastname: 'Bellucci',
            email: 'pierino.bellucci@libero.it',
            fiscalcode: 'BLLPRN85D03D643O',
            phone: '03784812547',
            province: 'FG'
        }
    ];
    getUsers(){
        return this.user;
    }

    deleteUser(user:User){
        let index = this.user.indexOf(user);
        if(index >= 0)
        {
            this.user.splice(index,1);
        }
    }

    updateUser(user:UserInterface){
        const idx = this.user.findIndex((v) => v.id === user.id)
        alert(idx);
        if (idx != -1){
            this.user[idx] = user;
        }
    }
    createUser(user:UserInterface){
            this.user.splice(0,0,user);
    }

}
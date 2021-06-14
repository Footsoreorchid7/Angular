import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
user =
    [
        {
            name: 'Mario',
            lastname: 'Rossi',
            email: 'mario.rossi@gmail.com',
            fiscalcode: 'RSSMRA68M02A509I',
            phone: '03972976370',
            province: 'AV'
        },
        {
            name: 'Raffaella',
            lastname: 'Colombo',
            email: 'raffaella.colombo@jourrapide.com',
            fiscalcode: 'CLMRFL52S50E715N',
            phone: '03163610556',
            province: 'LU'
        },
        {
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

    deleteUser(user:any){
        let index = this.user.indexOf(user);
        if(index >= 0)
        {
            this.user.splice(index,1);
        }
    }

}
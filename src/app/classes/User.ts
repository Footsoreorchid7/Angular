import { UserInterface } from "../interface/user";

export class User implements UserInterface{
    id:number;
    name:string;
    lastname:string;
    email:string;
    fiscalcode:string;
    phone:string;
    province:string;
    constructor(){
        this.id = 0;
        this.name = '';
        this.lastname = '';
        this.email = '';
        this.fiscalcode = '';
        this.phone = '';
        this.province = '';
    }
}
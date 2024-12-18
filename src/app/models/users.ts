export class Usuario {

    id?: number;
    username: string;
    lastname?: string;
    password: string;
    email?: string;

    constructor(username: string, password: string, lastname?: string, email?: string){
        this.username = username;
        this.password = password;
        this.lastname = lastname;
        this.email = email;
    }
}
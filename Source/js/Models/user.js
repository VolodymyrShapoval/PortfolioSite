export class User{
    constructor(name, email, question){
        this.name = name;
        this.email = email;
        this.question = question;
    }

    getValues() {
        return this.name, this.email, this.question;
    }
}
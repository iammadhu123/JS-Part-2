class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){//setter return nhi krte
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}madhu`
    }

    set password(value) {
        this._password = value
    }
}

const madhu = new User('madhu@.com', '12ab')
console.log(madhu.password);
console.log(madhu.email);


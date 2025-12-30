
//underscore shows that these properties are private
const User = {
    _email: "madhu@m.com",
    _password: '123',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

// factry f^n => Object.create()
const tom = Object.create(User)
console.log(tom.email);

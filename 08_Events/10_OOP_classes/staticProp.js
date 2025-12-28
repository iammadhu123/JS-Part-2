class User {
    constructor(username){
        this.username =username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const madhu = new User("Madhu");
// console.log(madhu.createId()) //not access becoz static 
console.log(madhu.logMe());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const dam = new Teacher("Dam", "dam@gmail.com");
dam.logMe()
// console.log(dam.createId());//not access becoz static

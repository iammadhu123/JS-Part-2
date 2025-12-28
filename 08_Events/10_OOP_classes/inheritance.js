class User {
    constructor(username){
        this.username = username;
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const tom = new Teacher("Tom", "tom@gmail.com", "1234");
tom.addCourse();
tom.logMe()

const sam = new User("Sam");
sam.logMe()

console.log(tom === sam);//false
console.log(tom instanceof Teacher);//true
console.log(tom instanceof User);//true





//ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encyptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", 'chai123@fb.com', '123')
// console.log(chai.encyptPassword());
// console.log(chai.changeUsername());



//behind the scene => without using class

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encyptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encyptPassword());
console.log(tea.changeUsername());




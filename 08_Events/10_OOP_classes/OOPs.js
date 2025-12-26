//Object literals
// const user = {
//     username: "madhu",
//     loginCount: 4,
//     signedIn: true,

//     getUserDetails: function() {
//         //console.log("Got user details from database");
//         //console.log(`Username: ${this.username}`);
//         console.log(this);//current context
        
//     }
    
// }
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);//{}


// const prommiseOne = new Promise();
// const date = new Date();//new kw => constructor f^n

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){//method
        console.log(`Welcome ${this.username}`);
        
    }

    // return this; //implicitly defined
}

// const userOne = User('madhu',10, true);
// const userTwo = User('chaiaurcode', 11, false);  //override 
// console.log(userOne);

const userOne = new User('madhu',10, true);// 1.whenwe use 'this' kwfirstly new obj create hota h
//2.constructor f^n called due to 'new' kw
//3.this kw inject ho jate h f^n me
//f^n se mmil jata h
const userTwo = new User('chaiaurcode', 11, false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);

//Prototype
// In JavaScript, a prototype is a mechanism by which objects inherit properties and methods from other objects.
// Think of it as a shared storage for functions and properties that many objects can use.

// 🔹 Why prototype exists
// To save memory (methods are not duplicated for every object)
// To enable inheritance in JavaScript
// To allow objects to access properties they don’t directly have

// let myName = "Madhu  ";

// console.log(myName.trim().length);
// console.log(myName.truelength);//undefined



let myHeros = ["thor", "spiderman"];


let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.madhu = function(){
    console.log(`Madhu is present in all objects.`);
}

Array.prototype.heyMadhu = function(){
    console.log(`Madhu says hello!`);
    
}
//heroPower.madhu();

// myHeros.madhu();

// myHeros.heyMadhu();
// heroPower.heyMadhu();//error

//Inheritance

const user = {
    username: 'chai',
    email: 'chai123@gmail.com'
}

const teacher = {
    makeVdo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user;


//Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher);


let anotherUsername = 'ChaiAurCode      ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`); //undefined
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Madhu".trueLength();
"IceCream".trueLength();
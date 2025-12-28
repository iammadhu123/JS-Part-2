//getOwnPropertyDescriptor => tells hidden part of obj

// Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(Math.PI);
Math.PI = 4;
console.log(Math.PI);//no change

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);




const chai = {
    name: 'ginger chai',
    price: '50',
    isAvailable: true,

    orderChai: function(){
        console.log('chai nhi bani');
        
    }
}
// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true // if true => name enable || if false => name disable
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
// }


for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
}
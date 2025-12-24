//create promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve();
    }, 1000);
});
//consume promise
promiseOne.then(function () {
    console.log('Promise consumed');
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async tast 2 resoled");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "_m4dhu__", email: 'madhu122@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "_m4dhu__", password: 'Madhu@123'})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then( (USERNAME) => {
    console.log(USERNAME);
}).catch(function(error){
    console.log(error);
}).finally(() =>  console.log('The promise is either resolved or rejected')
)


const promiseFive = new Promise(function(resolve, reject){ //we can also use arrow f^n
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "JavaScript", password: 'Js@123'})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         //console.log(response);
        
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();


// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/iammadhu123')
.then((response) => {
    return response.json();
})
.then( (data) => { //handle karega
    console.log(data);
})
.catch((error) => {
    console.log("E:", error);
})



//A fetch() promise only rejects when the
//  request fails, for example, because of a
//  badly-formed request URL or a network error.
//  A fetch() promise does not reject if the
//  server responds with HTTP status codes that
//  indicate errors (404, 504, etc.). Instead, a then()
//  handler must check the Response.ok and/or Response.status properties.
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log('called');
    
}

function createUser(username, email, password){
    // SetUsername.call(username); // .call => explicitly
    SetUsername.call(this, username);
 
    this.email = email;
    this.password = password;
}

const chai = new createUser("madhu", 'iammadhu23@fb.com', 'Madhu@123')
console.log(chai);

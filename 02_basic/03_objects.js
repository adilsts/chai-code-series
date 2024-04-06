// singleton

//object.create

//object literals
const mySym = Symbol("key1")

const newuser = {
    name : "Adil" ,
    "full name":"Adil khan",
    [mySym] : "myKey1",
    age : 26,
    location : "Mardan",
    Email : "adil@google.com",
    isloggedIn : false,
    lastLoggedIn: ["Monday","Friday"],

}

// console.log(newuser.Email)
// console.log(newuser["Email"])
// console.log(newuser["full name"])
// console.log(newuser[mySym])

// newuser.Email = "adil.pakscribe.online";
//  Object.freeze(newuser);
// newuser.Email = "ubaid.pakscribe.online";

// console.log(newuser)


newuser.greetingTwo = function() {
    console.log(`hi sir how are you `);
}
newuser.greeting = function() {
    console.log(`hi sir how are you ${this.name}`);
}
 console.log(newuser.greeting());
 console.log(newuser.greetingTwo());
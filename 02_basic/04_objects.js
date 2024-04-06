// const tinderUser = new Object ()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Adil khan"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email : "some@gmial.com",
    fullname : {
    userfullname : {
    firstname : "ubaid",
    Lastname : "khan"
}
}
}

// console.log(regularUser.fullname.userfullname)
const obj1 = {1: " a", 2: "b"}
const obj2 = {3: " c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} ,obj1 , obj2)
const obj3 = {...obj1 , ...obj2}

// console.log(obj3)

const users = [
    {
        id : 1,
        email : "adil@gmail.com",

    },
    {
        id : 2,
        email : "uzair@gmail.com",
        
    },
    {
        id : 3,
        email : "ubair@gmail.com",
        
    },
    {
        id : 4,
        email : "junaid@gmail.com",
        
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));


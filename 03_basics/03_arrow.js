const user = {
    username : "Adil",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome our website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "ubaid"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "adil khan"
//     console.log(this.username)
// }

// chai ()

// const chai = function () {
//     let username = "adil khan"
//     console.log(this.username)
// }

// chai ()


// const chai = () => {
//     let username = "adil khan"
//     console.log(this.username);
// }

// chai ()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,5));
const addTwo = (num1 , num2) =>   ({username : "adil khan"})
console.log(addTwo(3,5))

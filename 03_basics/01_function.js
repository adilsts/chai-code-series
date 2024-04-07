function saymyName () {
    console.log("A")
    console.log("d")
    console.log("i")
    console.log("l")
}

// saymyName()

function addTwoNumber (num1,num2){

//   let result = num1 + num2
//   return result
    return num1 + num2

}
const result = addTwoNumber(3,5)
// console.log(result)

function loginuser(username = "harry"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username}  just logged in` 
}

console.log(loginuser("adil"))


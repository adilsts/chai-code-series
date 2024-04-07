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

// console.log(loginuser("adil"))

function calculateCartprice ( val1, val2 ,...num1){
    return num1
}

// console.log(calculateCartprice(200,500,600,2000,5000))

const user = {
    username : "Adil khan",
    price : 199,
}

function handleobject(andyobject)
{
    console.log(`Username is ${andyobject.username} and price is ${andyobject.price}`)
}

// handleobject(user)
handleobject({
    username : "uzair",
    price : 566
})

const myNewArray = [200,400,300,800]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray))
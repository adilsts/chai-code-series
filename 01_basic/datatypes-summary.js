// primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt



const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 255645345351563165315n

//// console.log(bigNumber)

// Non Primitive (Reference)

// Array, Objects, Function

const heros = "adil, ubaid, jillani";
let myObj = {
    name : "adil",
    age : 26,

}

const myFunction = function ( ){
    console.log("Hello world")
}

///------------------------------------------------------------------------

/// Stack (primitive), Heap (Non Primitive)
let myYoutubename = "adil@google.com"

let anothername = myYoutubename;
anothername = "Adil khan"

console.log(myYoutubename)
console.log(anothername)
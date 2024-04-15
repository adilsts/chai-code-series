// immediately invoked function expression (IIFE)

(function chai () {
    // name iife
console.log(`DB Connected`)
}
)();
( (name) => {
    //without name
    console.log(`DB Connected ${name}`)
    }
)("Adil khan");


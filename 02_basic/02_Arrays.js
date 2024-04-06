const aletter = ["a","b","c","d"]
const bletter = ["e","f","g","h"]

// aletter.push(bletter)
// console.log(aletter)


// cletter = aletter.concat(bletter)
// console.log(cletter)

const  cletter = [...aletter, ...bletter]

// console.log(cletter)

// const aNumber = [1,2,3,[4,5,6,],7,[8,9, [1,2,3]]]
// const bNumber = aNumber.flat(Infinity)
// console.log(bNumber)

console.log(Array.isArray("Adil khan"))
console.log(Array.from("Adil khan"))

console.log(Array.from({name: "Adil khan"}))
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
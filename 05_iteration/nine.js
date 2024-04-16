const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)

// console.log(myTotal);

// const myTotal = myNums.reduce((acc, curr) => acc+curr , 0)

// console.log(myTotal);

const shoppingCart = [
    {
    itemname : "js course",
    price : 499
    },
    {
        itemname : "python course",
        price : 3499
        },
        {
            itemname : "java course",
            price : 1499
            },
            {
                itemname : "data science course",
                price : 2499
                },
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price ,0)

console.log(pricetopay);
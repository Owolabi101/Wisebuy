let number = [1, 5, 10, 15, 20, 25, 30];
console.log(number)




const double = number.map(function( num,index,array) {
    return num * 2
})
console.log(double)


const mapEven = number.map(function (blue,index,array) {
    
    if (blue % 2 === 0) {
        return blue
    } 
        
})
const filterEven = number.filter(function (blue,index,array) {
    
    if (blue % 2 === 0) {
        return blue
    } 
        
})
console.log(mapEven)
console.log(filterEven)

let nam = ["timi","tunde","joshua","ebun"];
console.log(nam)


const nameT = nam.filter(function (a,b,c) {
    if (a.charAt(0) === "t") {
        return a 
    }
    
})
console.log(nameT)




const withdrawal = [10000, -2000, 500, 4000, -300, 20000]
console.log(withdrawal)


const transactionA = withdrawal.filter(function (a,b,c) {
    if (a > 0) {
        return a
    }
})
console.log(transactionA)

const transactionB = withdrawal.filter(function (a,b,c) {
    if (a < 0) {
        return a
    }
})
console.log(transactionB)

const transactionC = withdrawal.reduce(function (acc,cur) {
    return acc + cur
})
console.log(transactionC)
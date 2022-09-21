const prompt = require('prompt-sync')()


let n = parseInt(prompt('Input number to find sum of all the numbers till n? '))
console.log(`Find sum of all numbers till n ${n} `)

let sum = 0

function sumTillNRecursive(num){
    if (num == 0){
        return num
    }
    sum = num + sumTillNRecursive(num - 1)
    return sum
}

sum = sumTillNRecursive(n)//output:10
console.log(sum)
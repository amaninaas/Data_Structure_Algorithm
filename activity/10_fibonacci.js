// Write a function to print first n fibonacci numbers. In fobonacci sequence, next number is the sum of previous 2 number. First 2 numbers in sequence are constant.
// 0, 1 is constant in fibonacci sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....

let fibo = [0,1]

function fibonacci(num){
    for(let i = 1; i < num ; i++){
        fibo.push(fibo[i] + fibo[i - 1])
    }
}

fibonacci(10);
console.log(fibo);
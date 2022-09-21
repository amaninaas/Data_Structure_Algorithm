// Write a function to print the factorial of number n. If n = 5, then factorial of 5 is 5 * 4 * 3 * 2 * 1. If n = 10, the factorial of 10 is 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial( n - 1);
    }
}

let n = 4;
ans = factorial(n)

console.log("The factorial of " + n + " is " + ans);
console.log("The factorial of ",`${n}`, " is " ,`${ans}`);
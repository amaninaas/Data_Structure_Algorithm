var count = 0


function welcome(){
    count++
    console.log("Hello from Recursion")
    //recursive functions must always have a stop condition
    welcome()
}

welcome();
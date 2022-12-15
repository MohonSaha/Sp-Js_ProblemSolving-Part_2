// Find the factorial of a number usuing recursive function part:2 


function fact(n){
    if (n === 1){
        return 1;
    }
    return n * fact (n-1)
}
console.log(fact(3));
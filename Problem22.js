// Find the factorial of a number usuing recursion Method:1

var number = prompt("please enter a number");
var fact = 1;
function factR(n){
    if(n>number){
        return;
    }
    fact = fact * n;
    n++;
    factR(n)
}

factR(1);
console.log(`The fact of ${number} is ${fact}`);
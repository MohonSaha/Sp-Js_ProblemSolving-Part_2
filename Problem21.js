// Find the factorial of a number 


function factorial(number) {
    var fact = 1;
    if (number === 0) {
        console.log("The factorial of 0 is 1.");
    }
    else if (number < 0){
        console.log("The factorial of negative number is not possible");
    }
    else{
        for (var i = 1; i<=number; i++){
            fact = fact * i;
        }
        console.log(fact);
    }

}
factorial(3)
// Mske a simple calculator using switch statement 

var num1 = prompt("Enter 1st number");
var num2 = prompt("Enter 12ns number");
var opr = prompt("Select the operator +, -, x, /");

switch (opr)
    {
        case "+" :
            var result = parseFloat(num1) + parseFloat(num2);
            console.log(result);
            break;
        case "-" :
            var result = num1 - num2;
            console.log(result);
            break;
        case "x" :
            var result = num1 * num2;
            console.log(result);
            break;
        case "/" :
        var result = num1 / num2;
        console.log(result);
        break;

        default :
        console.log("Invaild Operator");

    }

    alert("Thanks a lot")
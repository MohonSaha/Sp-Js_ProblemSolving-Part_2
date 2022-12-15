// js program to print the table of any user defined number 

function table(number){
    for (var i = 1; i <= 10; i++){
        var result = i * number;
        console.log(`${number} x ${i} = ${result}`);
    }
}
table(12);
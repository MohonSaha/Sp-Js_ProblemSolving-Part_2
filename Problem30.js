// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a


// Method: 1
function myFunction(a) {
    var sum = [];
        for(i = 0; i<= 2; i++){
            var three = a[i];
            sum.push(three);
        }
        return sum;   
}
myFunction([1, 2, 3, 4])
console.log(sum);


// Method: 2 


function myFunction(a) {       
        const result = a.slice(0, 3);
        return result;  
}
const last = myFunction([1, 2, 3, 4])
console.log(last);

// Find the sum of all Element of an array 

const arr = [1, 2, 3, 4, 5];

function sum (arr, lastIndex){
    if(lastIndex < 0){
        return 0;
    }
    return arr[lastIndex] + sum(arr, lastIndex-1);
}

console.log(sum(arr, arr.length-1));
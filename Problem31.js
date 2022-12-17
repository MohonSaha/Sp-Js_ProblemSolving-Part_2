// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country


function myFunction(obj){
    const country = obj.country;
    return country;
}
const result = myFunction({ continent: 'Asia', country: 'Japan' })
console.log(result);
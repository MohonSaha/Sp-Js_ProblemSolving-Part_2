// Make a loop and show javascript means love 10 times usuing recursive function

function love (n){
    if (n === 0){
        return;
    }
    console.log("JavaScript Means Love");
    love(n-1);
}

love(10)
const fibonacci = function(n) {
    if(n<0){
        return"OOPS";
    }

    let fibonacci = new Array(n+2);
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for(let i = 2; i <= n; i++){
        
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci[n]);
    return fibonacci[n];

};

// Do not edit below this line
module.exports = fibonacci;

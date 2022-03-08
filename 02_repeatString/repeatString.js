const repeatString = function(s , times) {
    let repeatString = "";
    if(times < 0){
        return "ERROR";
    }
    for(let i = 0; i < times; i++){
        repeatString += s;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;

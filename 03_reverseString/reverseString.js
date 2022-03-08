const reverseString = function(s) {
    let stringArray = s.split("");
    let reverseArray = [];
    for(let i = 0; i < s.length; i++){
        reverseArray.push(stringArray.pop());
    }
    //console.log(stringArray);
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

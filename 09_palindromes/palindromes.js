const palindromes = function (text) {
    text = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    let copyText = text;
    let textLength = copyText.length;
    copyText = copyText.split("");
    reverseText = [];
    for(let i = 0;i < textLength;i++){
        reverseText.push(copyText.pop());
    }
    reverseText = reverseText.join("");
    console.log(reverseText);
    if(reverseText == text){
        return true;
    } else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;

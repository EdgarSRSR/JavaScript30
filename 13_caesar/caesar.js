const caesar = function(text, n) {

    let cryptoText = [];
    for(let i = 0; i < text.length; i++){

        if(n>26){
            n = n%26;
        }

        if(n > 0){

            if((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= (90 - n)) || (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 - n)  ){
                cryptoText[i] = text.charCodeAt(i) +  n;
            } else if(text.charCodeAt(i) > 90 - n){
                cryptoText[i] = 64 + n - (90 - text.charCodeAt(i));
            } else if(text.charCodeAt(i) > 122 - n){
                cryptoText[i] = 96 + n - (122 - text.charCodeAt(i));
            } else {
                cryptoText[i] = text.charCodeAt(i);
            }

        } else if(n < 0) {
            
            if(text.charCodeAt(i) < 65){
                cryptoText[i] = text.charCodeAt(i);
            }else if((text.charCodeAt(i) + n > 64 && text.charCodeAt(i) < 91) || (text.charCodeAt(i) + n > 96 && text.charCodeAt(i) < 123)  ){
                cryptoText[i] = text.charCodeAt(i) +  n;
            } else if(text.charCodeAt(i) + n < 65){
                cryptoText[i] = 91 + n - (65 - text.charCodeAt(i));
            } else if(text.charCodeAt(i) + n < 97 - n){
                cryptoText[i] = 123 + n - (97 - text.charCodeAt(i));
            } 
        }
        
    }
    let encryptedText = "";
    console.log(cryptoText);
    for(let j = 0; j < cryptoText.length; j++){
        encryptedText += String.fromCharCode(cryptoText[j]);
    }
    console.log(encryptedText);
    return encryptedText;

};

// Do not edit below this line
module.exports = caesar;

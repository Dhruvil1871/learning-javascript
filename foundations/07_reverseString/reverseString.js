const reverseString = function(string) {
    let r_string = "";
    for(let i=(string.length)-1; i>=0; i--){
        r_string += string[i];
    }
    return r_string;
    
    //another method to reverse string
    // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

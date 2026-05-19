function add7(num){
    return num + 7;
}

function multiply(num1,num2){
    return num1 * num2;
}

function capitalize(string){
    let first = string[0];
    let rest = string.slice(1);

    if(first !== first.toUpperCase()){
        first = first.toUpperCase();
    }
    rest = rest.toLowerCase();

    return first + rest;
}

function lastLetter(string){
    return string[string.length - 1];
}

console.log(add7(10));
console.log(multiply(5, 10));
console.log(lastLetter("phantom"));
console.log(capitalize("hELLo"));
//this program won't work in terminal , you need to run it in browser
let answer = parseInt(prompt("enter the number you would like to fizzbuzz upto: "));

for(let i = 1; i <= answer; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz, ");
    }else if(i % 3 == 0){
        console.log("fizz, ")
    }else if(i % 5 == 0){
        console.log("buzz, ")
    }else{
        console.log(i + ", ")
    }
}
//javascript allow no parameters defined but passing in arguments
let displayColors1 = function(){
    console.log(message);
    console.log(arguments)
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

let message = "list of colors"

displayColors1(message,'red');
displayColors1(message,'red','Blue');

//ES6 adding parameters lists explicitly
//Rest Operator, takes arguments and make it as arrays
let displayColors2 = function(message2, ...colors){
    console.log(message2);
    console.log(colors)
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

let message2 = "list of colors 2"

displayColors2(message2,'red');
displayColors2(message2,'red','Blue');

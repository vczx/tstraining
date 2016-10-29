//Spread operator
//take array and break down to variables
let displayColors3 = function(message2, ...colors){
    console.log(message3);
    console.log(colors)
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

let message3 = "list of colors 2"
let colorArray = ['Orange','Yellow','Indigo']

//Spread operator
//take array and break down to variables
displayColors3(message3, ...colorArray)

function greetPerson(name){
    let greet;
    if(name=="jack"){
         greet = "Hello Jack"
    }else{
        // let is block scope
         greet = "Hi there"
    }
    console.log(greet);
}
greetPerson("jack")
greetPerson("no")

var a =1;
var b =2;
if(a === 1 ){
    var a =10;
    let b = 20;
    console.log(a) //10
    console.log(b) //20
}

console.log(a) //10
console.log(b) //2



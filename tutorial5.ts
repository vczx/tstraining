function greetPerson(name){
    if(name=="jack"){
        var greet = "Hello Jack"
    }else{
        // hoisting using the var declaration twice
        //var keyword is functional scope, accessable within a function
        var greet = "Hi there"
    }
    console.log(greet);
}
greetPerson("jack")
greetPerson("no")

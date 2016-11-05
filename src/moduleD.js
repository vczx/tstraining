export function greet(message){
    console.log(message);
};

export class GreetMessage{
    constructor(){
        console.log("consructot");
    }
    greet(){
        console.log("Grret message in function")
    }
}
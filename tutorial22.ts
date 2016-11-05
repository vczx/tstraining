//clsss 2,javascript
class Person22{
    constructor(name){
        this.name = name;
        console.log(this.name + " Constructor");
    }
    //called by the object
    static staticMethod(){
        console.log("Static Method")
    }
    //prototype method, called by variable
    greetPerson(){
        console.log("Hello "+ this.name);
    }
}

let pv = new Person22("Chandler");
Person22.staticMethod();
pv.greetPerson();


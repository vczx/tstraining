//clsss inheritance
class Person23{
    constructor(name){
        console.log(name + " Person constructor")
    }
    getID(){
        return 10;
    }
}

class Employee extends Person23{
    constructor(name){
        super(name);
        console.log(name + " Employee constructor")
    }
    getID(){
        return super.getID();
    }
}

let e = new Employee("Chandler")
console.log(e.getID())
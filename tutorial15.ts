//Object Literals
let firstname ="Chandler"
let lastname = "Bing"

let person = {
    firstname : firstname,
    lastname:lastname
};

console.log(person.firstname)
console.log(person.lastname)

//shorter version
let person2 = {
    firstname,
    lastname
};

//even shorter version
function createPerson2(firstname,lastname,age){
    let fullname =  firstname+ " " + lastname;
    return{
        firstname,
        lastname,
        fullname,
        isSenior:function(){
            return age>60;
        }
    }
}

let p = createPerson2("Ross","Geller",32);

console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
//take note of this function , need to use ()
console.log(p.isSenior());
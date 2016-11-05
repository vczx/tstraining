//Sets and Maps ES5 version
let mySet = Object.create(null);
mySet.id = true; //can be 0 or 1
if(mySet.id){
    console.log("id exisits");
}

let myMap = Object.create(null);
myMap.name = "Chandler";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"])



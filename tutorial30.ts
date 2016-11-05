//Sets and Maps ES6 version
 let mySet = new Set();
let ob1 = {};
let ob2 = {};

 mySet.add("Hello");
 mySet.add(1);
 mySet.add(ob1);
 mySet.add(ob2);
 console.log(mySet.size);

//size of the set is 4, the last 3 4s are considered as 1, 
//set do not allow duplicate
 let newSet = new Set([1,2,3,4,4,4]);
 console.log(newSet.size);

//chaining
 let chainSet = new Set().add("hello").add("world");
 console.log(chainSet.size);

 console.log(newSet.has(1));//true

 console.log(newSet.delete(1));
 console.log(newSet.size);

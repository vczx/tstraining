let employees = ["chandler", "Bing","Male"];

//Destructuring Array
let [fname,lname,gender] = employees

console.log(fname)
console.log(lname)
console.log(gender)

// using Rest operator
let [fname2,...elements] = employees
console.log(elements)

let [fname3,lname2,gender2="Female"] = employees


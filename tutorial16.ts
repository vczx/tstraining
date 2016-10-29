let ln = "last name";

let personSpace = {
    //what if there is a space in the variable name
    "first name":"Chandler",
    //substituting variable name
    [ln] : "Bing"
};

console.log(personSpace["first name"])

console.log(personSpace);
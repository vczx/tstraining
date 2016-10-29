var getRegvalue = function (){
    return 10;
}
console.log(getRegvalue());

//using const
const getArrowValue = ()=> {
    return 10;
}
console.log(getArrowValue())

//concise
const getArrowValue2 = ()=> 10;
console.log(getArrowValue2())

//passing values
const getArrowValue3 = (m)=> 10*m;
console.log(getArrowValue3(5))

//passing multiple values
const getArrowValue4 = (m,n)=> 10*m*n;
console.log(getArrowValue4(5,5))
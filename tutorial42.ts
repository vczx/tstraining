//type inference
var a=10;
a = 'hello'; //prevetion a should be int , not string

var a2 = a + " String "; //type changed to String

//any type 
var info : any;
info = 10;
info = "hello";
info = true;

//enum for ts
//assign numeric value 0 1 2, explictly or implicitly
enum eyeColor{
  Brown=1,Black=2,Blue=10
};

var myEyeColor = eyeColor.Brown

console.log(myEyeColor);//print 1 on console



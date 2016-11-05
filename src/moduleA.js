//module import is hoisted , module B loaded is hoisted on top
//imported variable can not be changed but property of an object can be changed
console.log(f + " and " + l);
import {fname as f,lname as l, obj as j} from './moduleB.js'

console.log(j)
j.name = "Vincent"
console.log(j)
console.log('${f} and ${l}');

console.log(f + " and " + l);
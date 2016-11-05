//WeakSet
//weak set allows for garbage collection if all keys are null
//normal set even the key is null, set size will not change
//????
let set = new WeakSet();
let key = {}
set.add(key);
console.log(set.has(key));
key = null;
console.log(set.has(key));
// PRIMITIVE DATATYPE
// 7 TYPE :- String, Number, Boolean, null, undefined, Symbol(used to give unique value), BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anid = Symbol('123')
console.log(id === anid);
const bigNumber = 1234567890123456789n
// REFERENCE {NON PRIMITIVE}
// Array, Objects, Functions
const heros = ["tiger", "naga" , "ntr"];
let myObj = {
    name: "prince",
    age: 18,
}
const myFunction = function(){
    console.log("hello world");
    
}
// (TYPEOF) is used toknow the datatype
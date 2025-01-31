const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // decimal point fix

const num = 123.996 // roundoff by the position given
console.log(num.toPrecision(3));


const hund = 1000000
console.log(hund.toLocaleString('en-IN'))



//-------------MATH-----------//


console.log(Math);
console.log(Math.abs(-4)); //converts negative to positive only
console.log(Math.round(4.3));// normal roundoff
console.log(Math.ceil(4.2)); //only roundoff with higher value
console.log(Math.floor(4.9)); //only takes lower value

console.log(Math.random()); //value will come only between 0 & 1
console.log((Math.random()*10) + 1); // +1 is for all non zero output
console.log(Math.floor(Math.random()*10) + 1);

const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min);








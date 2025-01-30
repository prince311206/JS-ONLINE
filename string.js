const name = "prince"
const repoCount = 50

console.log(name + repoCount + " value");
console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gamename = new String ('Prince-gc')
console.log(gamename[0]);

console.log(gamename.__proto__);



console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(3));  //position

console.log(gamename.indexOf('r'));

const newstr = gamename.substring(0,4) //crop a string

console.log(newstr);

const Newstr = gamename.substring(-8,4) //slice a string
console.log(Newstr);

const NewStr = "     RAM     "
console.log(NewStr);
console.log(NewStr.trim()); //crop the extra space
console.log(NewStr.trimEnd());
console.log(NewStr.trimStart());


const url = "princepriyaranjan1234@gmail.com"

console.log(url.replace('1234','3112'));

console.log(url.includes('prince'));

console.log(gamename.split('-'));






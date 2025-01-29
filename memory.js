// stack (primitive) , heap (non primitive)




let myname = "prince"

let anothername = myname

console.log(anothername);

let mname = "prince"

let aname = myname

aname = "nothing"

console.log(aname);


let userone = {
    
    email : "prince@gamil.com",
    upi: "prince@ybl"

}
let usertwo = userone
usertwo.email = "ram@gmail.com"
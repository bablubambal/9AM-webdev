console.log("Day 1 ")
/* varibles and data types and string methods in Js  */

// let a =2.345;
// console.log(a,typeof(a))
//  a ="pooja";
// console.log(a,typeof(a))
// a = false;
// console.log(a,typeof(a))
// a =null
// console.log(a,typeof(a))
// let b 
// console.log(b,typeof(b))
// b = {"name":"pooja","description":"learning js"}
// console.log(b,typeof(b))

// Ohter data structrurrese in js 
let data = [1,2,7,8,9,10]
// a,b, data = (2,3,4)
data = {
    "name":"Lokesh",
    "age":23,
}
// console.log(data,typeof(data))

/** String Methods */

let name = "Lokesh Pooja Rohan"

console.log(name)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.split(" ")[0])
// console.log(name.split(" ")[1])
// console.log(name.split(" ")[2])
// substring 
console.log(name.substring(7,13)) //specifiy the starting index and ending index
console.log(name.substr(7,6)) // specifiy the starting index and number of characters
console.log(name.replace("Pooja","Ramu"))  // it replaces the original name with the new name

console.log(name.length)
a = "Helo"
b = " world        "

console.log(a,b)
console.log(a.concat(b))
console.log(b.trim())

let s = "Pooja"
console.log(s.charAt(3))
console.log(s.charCodeAt(3))
console.log(s[0])
console.log(s[1])
console.log(s[2])
console.log(s[3])
console.log(s[4])


// let var const  key words

let num = 23;
num = 45

const mynum = 3.14;

// mynum= 345
console.log(mynum);
console.log(num)

//Rules for the vairable 
/**
 * vAriable canot have special charater expect $ and _ 
 * 
 * YOu cannot start with a number 
 * Case senstitive
 */

let va$lue2 = 234;
let Va$lue2 = 24;
console.log(va$lue2);
console.log(Va$lue2);
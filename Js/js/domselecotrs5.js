console.log("Hi Dom")

console.log(document)

//Dom Manipulaltor:
/**
 * I want modify my site dynamically
1. getElementById
2. getElementsByTagName
3. getElementsByClassName
4. querySelector

//commonly :
tag selector
id
class
query 

*/

//Tag selector:
let d = document.getElementsByTagName("h1")
// id slectors:
d = document.getElementById("myspan")

// class selector:
d = document.getElementsByClassName('para')
//query selector;
d = document.querySelector("#myspan")

//query selector All
d = document.querySelectorAll("#myspan")
// console.log(d)

// Dom methods
// d[0].innerHTML 

d[0].innerText = "I am updating inter text"
d[0].innerHTML = "<h1>hi you are updated now </h1>"
console.log(d[0].innerHTML)
console.log(d[0].innerText)

console.log(d[0].classList)

// d[0].classList.remove("red")
// d[0].classList.add("green")
console.log(d[0].classList)

// e = document.getElementById("btn")
// e.addEventListener('click',()=>{
//     d[0].classList.add("green")
// })
// e.addEventListener('dblclick',()=>{
//     d[0].classList.remove("green")
//     d[0].classList.add("red")
// })


/// to update attributes also

console.log(d[0].setAttribute("src","my image"))







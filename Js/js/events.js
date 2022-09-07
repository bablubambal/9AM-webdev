console.log("Events")

/**
 * Different kind of events
 * 
 * 1.Mouse events:
 *  -> click ,dblclick, onmouseover,onmouseout
 * 2. keyboard events:
 * -> pressenter, onkeyup,onkeydown()
 * 3. Page Events or Window or document event
 * --> onload, onwindowresize
 * 4. form events:
 * onsubmit,onfocus,onblur
 */

let dayId = document.getElementById("day")
// console.log(dayId)
function dayclick(){
    console.log("h1 is clicked")
}
let dblclick=()=>{
    console.log("double clicked")
}
dayId.addEventListener('dblclick',()=>{
    console.log("h1 is double clicked")
})

dayId.addEventListener('mouseover',()=>{
    console.log("mouse over")
})
dayId.addEventListener('mouseleave',()=>{
    console.log("mouse left")
})
function inpfocus(){
    console.log("input is fouced")
}
function inpblur(){
    console.log("input foucs change bulred")
}

function inpchange(){
  let b =  document.getElementById("inp").value
    console.log("input is changeing the value in input is",b)
}

document.getElementById("inp").addEventListener('keyup',()=>{
    console.log("key up called")
})


// windows function:
// .ready , load function

const loadfun=()=>{
    console.log("body loaed")
}
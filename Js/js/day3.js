console.log("Welcome to Day-3")
/** Conditional Statement:
 * 
 * if else
 * nested if else
 * switch case
 * 
 */

// syntax  of basic if else
// condition = false
// if(condition){
//     // code will be executed
//     console.log("True Block")
// }
// else{
//     //codingtion == false  this block of code will be executed
//     console.log("False  Block")
// }

//Nested if else:
// age = 99
// if(age>100){
//     console.log("Duplicate Vote")
// }
// else if(age>18){
// gender = "M"
// //Nested if else condintion
//     if(gender == "M"){
//         console.log("Go to Gents line")
//     }
//     else{
//         console.log("Stand in same line")
//     }
    

//     console.log("You can votes")
// }


/**
 * Marks:
 * A++ B B+
 * 
 * 
 * if(condtion ){
 *  if(codition ){
 * if(condition ){
 * }
 * 
 * }
  * }
 * 
 */

// Switch Case Statements:
day =1;
 /*** 
switch (day) {
    case 0:
        console.log("Sunday")
     break;
    case 1:
        console.log("Monday") 
        break;
    case 2:
        console.log("Tuesday") 
        break;
    case 3:
        console.log("Wednesday") 
        break;

    default:
        console.log("Select a proper number")
        break;
}
*/

// Object Methods 

let a = [1,2,3,4,5]
//length:
// let len = a.length

// console.log(len)

//adding elements at the end of array
a.push(6)
a.push("ram")

// pushing eleement at the start of array 
a.unshift(0)
a.unshift("Krishna")

console.log(a)
// deleting the element from end  pop 

a.pop()
a.pop()

//deleting elements from the start:
a.shift()
a.shift()


console.log(a)



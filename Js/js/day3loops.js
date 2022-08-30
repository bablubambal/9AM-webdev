console.log("LOOPS IN JS")

/**
 * Why we Need Loops:
 * 1.Lazy 
 * 2. Repetaive task 
 * so loops
 * 
 */
//Problem stmt : Printining Number: 1-10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//Looops concept: 
// Different loops in JS 
/**
 * 1. for loop
 * 2. while
 * 3. do while
 * 
 */

// Q1: print number 1-100;
/**
for(variable(inintialition),condition,inc/dec){
    //code to be executed in loop
}
* */

for(let i = 1;i<=2;i=i+1){
    console.log(i)
    // console.log("hi")
}
console.log("loop ends here..")

a = "RaMaMa"//==="ram"
let sum = 0
for(i=0 ;i<a.length;i++){
    console.log(a[i]==a[i].toLowerCase())
    // if(a[i]==a[i].toLowerCase()){
    //     sum = sum+i
    // }
}

// Array.from(a).forEach((element,index) => {
//     if(element == element.toLowerCase()){
//         sum = sum +index
//     }
    
// });
console.log(sum)
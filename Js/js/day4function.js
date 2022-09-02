console.log("Learning functions")
/**
 * Why We Need Function
 * What is a Function
 * How to Write a Functin 
 */

/**
 * Syntax of Function in JS:
 *   function function_name (){
 * // code to executed
 * }
 * 
 */
// console.log("HI") /// function 
// print("ppyrint") // function to print pages
// a = "hello i am string"
// console.log(a.toUpperCase())

//Inbuilt function or system function:
// console.log()
// a.toUpperCase()
// a.toLowerCase()
// push () shift() postMessage
// math string list dict // pandas 


// User defined function  Custom function 
// function = methods


// function defination
function myfun(){
    console.log("you are in my fun")
    console.log("my fun works")
    console.log("end")
}

//call the function 
// myfun()
// myfun()
// myfun()


function calAvg(a,b,c){
    console.log("the avg of ",a,b,c,"is :",(a+b+c)/3)
}
calAvg(10,20,30)
calAvg(5,14,35)


/// Custom function s:
/***
 * they are of two types
 * 1. simple functions
 * 2. parametarized funtion
 * 3. return callackactkaer
 */

function greet(name){
    console.log("hi",name.toUpperCase())
}

greet("Ram")
greet("Krishna")

function addingNumber(a,b){
    console.log("you are adding",a,b,"result is :",a+b)
}
addingNumber(15,15)
addingNumber(1455,15457)



// Returning function: 

function checkEvenNumber(number){
    if(number %2 ==0){
        // console.log("Even Number",number)
        return true;
    }
    else{
        // console.log("Odd Number",number)
        return false
    }


}

let ans =  checkEvenNumber(6)
if(ans){
    console.log("even")
}
else{
    console.log("odd")
}
console.log(ans)
checkEvenNumber(7)
checkEvenNumber(33253472)



///Reason why using retrun

function login (uname,pwd){
    if(uname ,pwd == "data"){
        //logic here to login the person
        return true
    }
    return false
}


let loginper = login("uname","pwd")
loginper = login("data","data")
if(loginper){
    //directing to dashboard page
    console.log("logged in")
}
else{
    //show him errorr\
    console.log("login failed")
    console.log("login failed")
}
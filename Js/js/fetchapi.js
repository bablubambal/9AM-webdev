console.log("Learning Fetch api:")


// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((resp)=>resp.json())
// .then((data)=>console.log(data))
fetch("http://127.0.0.1:5500/js/menu.json")
.then((resp)=>resp.json())
.then((data)=>console.log(data))


let html = ``

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((resp)=>resp.json())
// .then((data)=>{

//     data.forEach(element => {
//         let curentdata = `<li> <b>${element.id}</b> ${element.title}`
//        html = html+curentdata
        
//     });
//     document.getElementById("frdslist").innerHTML = html
    
// })
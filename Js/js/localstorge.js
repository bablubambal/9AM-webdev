console.log("Local storage")
let frdlist = [];
const addfrd= ()=>{
 
 let frd = document.getElementById("frds").value;
 frdlist.push(frd)
 localStorage.setItem("frd",JSON.stringify(frdlist))
 console.log(frdlist )
 showFrds()
}
showFrds()
function showFrds(){
    let showfrdlist = document.getElementById("frdslist")
    let frdslist =  JSON.parse(localStorage.getItem("frd"))
    let htmldata = ``
    for(let frd in frdslist){
        htmldata = htmldata+`<li>${frdslist[frd]}</li>`
    }
    showfrdlist.innerHTML = htmldata
}
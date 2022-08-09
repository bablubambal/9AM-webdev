let editingNumber=0;
//Showing all notes in localstorage
function showNotes(){
    let html = document.getElementById("notesDisplay")
   
    let notes = localStorage.getItem("notes")
    let data = ``
    if(notes ==null){
        noteObj = []
        html.innerHTML = "No Notes to Show"
        return 
    }
    else{
        noteObj = JSON.parse(notes)
    }
    noteObj.map((element,index)=>{
        data += `
        <tr>
    <th scope="row">${index+1}</th>
    <td class=" ">${element}</td>
    <td ><ion-icon name="create-outline" onclick = "editNote(${index})" class="text-primary "></ion-icon></td>
    <td><ion-icon name="trash-outline" onclick ="deleteNote(${index})"  class="text-danger "></ion-icon></td>
  </tr>
        `
    })
    let table = `  <table class="table table-bordered table-striped table-hover">
<thead>
  <tr>
    <th scope="col">S.No</th>
    <th scope="col">Notes</th>
    <th scope="col">Edit <ion-icon name="create-outline"></ion-icon></th>
    <th scope="col">Delete <ion-icon name="trash-outline"></ion-icon></th>
  </tr>
</thead>
<tbody>
${data}
  
 
  
</tbody>
</table>`
    html.innerHTML = table;
}


//Deleting all Notes 
document.getElementById("deleteAllNote").addEventListener('click',function clearingNotes (){
    localStorage.clear()
    showNotes()
})
showNotes()

function deleteNote(index){
    let notes = localStorage.getItem("notes")
    if(notes ==null){
        noteObj = []
    
    }
    else{
        noteObj = JSON.parse(notes)
    }
    let confdel = confirm("R u sure Want to delete")
    // console.log(confdel)
    if(confdel){
        noteObj.splice(index,1)
        localStorage.setItem("notes",JSON.stringify(noteObj))
    }
    showNotes()

    

}



//Editing the notes
function editNote(index){
    console.log("new things",index)
    let inputValue = document.getElementById("note");

let notes = localStorage.getItem("notes")
if(notes ==null){
    noteObj = []

}
else{
    noteObj = JSON.parse(notes)
}
noteObj.forEach((element,i) => {
    if(index == i){
        inputValue = element;
        document.getElementById("addNote").classList.add("d-none")
        document.getElementById("saveNote").classList.remove("d-none")
        editingNumber = i;
        
    }
    
});

}

document.getElementById("saveNote").addEventListener("click",(editingNumber)=>{
    console.log("saving note")
    let inputValue = document.getElementById("note").value;

    let notes = localStorage.getItem("notes")
    if(notes ==null){
        noteObj = []
    
    }
    else{
        noteObj = JSON.parse(notes)
    }

    noteObj.forEach((element,i) => {
        console.log("nwq rhinf",element ,editingNumber )
        if(editingNumber == i){
            console.log("elements",editingNumber,i,"input value",inputValue)
            element =  inputValue;
            document.getElementById("addNote").classList.remove("d-none")
            document.getElementById("saveNote").classList.add("d-none")
            
            
        }
        
    });
    localStorage.setItem("notes",JSON.stringify(noteObj))
    showNotes()


})

document.getElementById("addNote").addEventListener("click",()=>{
   

let inputValue = document.getElementById("note").value;

let notes = localStorage.getItem("notes")
if(notes ==null){
    noteObj = []

}
else{
    noteObj = JSON.parse(notes)
}

if(inputValue.trim() !=""){
    noteObj.push(inputValue)
    localStorage.setItem("notes",JSON.stringify(noteObj))
    
}
else{
    alert("Note cannot be Empty")
}
document.getElementById("note").value =""
showNotes()

})
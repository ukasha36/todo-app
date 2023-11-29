


function todoapp() {


    let todoinput = document.getElementById("todoinput")
    let addbtn = document.getElementById("addbtn");
    let todool = document.getElementById("todool");


    let todoinputvalue = todoinput.value ; 


    
    console.log(todoinputvalue);
//  creating list 
    let createli = document.createElement("li");
    createli.innerHTML = todoinputvalue ; 
 todool.appendChild( createli);

 
let a = createli.setAttribute("class", "todoclass");


 todoinput.value = "";


//  creating edit button 
let editbutton= document.createElement("button");
editbutton.innerHTML = "Edit";
createli.append(editbutton);


let b = editbutton.setAttribute("class", "editbtn");

editbutton.addEventListener('click',function(){
    todoinputvalue = createli.firstChild.textContent ;
    console.log(todoinputvalue)
    editbutton.innerHTML = "Save";
 
     createli.firstChild.textContent = todoinput.value ;
     
   todoinput.value = "";
   editbutton.innerHTML = "Edit";
})
addbtn.style.display="inline-block";


//  delete edit button 
let deletebutton= document.createElement("button");
deletebutton.innerHTML = "Delete";
createli.append(deletebutton);

let c = deletebutton.setAttribute("class", "deletebtn");

deletebutton.addEventListener('click',function(){
    createli.remove();

})
}

function deletetodo(params) {
    todool.remove();
}


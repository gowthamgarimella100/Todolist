
let id = (name) => document.querySelector(name);


let createBtn = id('.add-icon');
let msgBox = id('.text-container');
let popUp = id('.model-container');
let form = id('.model-form');
let cls = id('.model-close')
let inp = id('.model-input');
let desc = id('.model-description');
let err=id('.error')
let addBtn = id('.add-button');
let clsBtn = id('.close-button');


const openModel = () =>{
    popUp.style.display='block';
    err.innerHTML='';
}
const closeModel = () =>{
    popUp.style.display='none';
    inp.value='';
    desc.value='';
}
 

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    validate();

});


const validate = () => {
    if(inp.value.trim()===''){
        err.innerHTML='Msg Cannot be empty..';
    }else{
        err.innerHTML='';
        writeMsg();
    }
}


let msg = {};
let descMsg={};


const writeMsg = () =>{
    msg['todo']=inp.value;
    descMsg['todoDesc']=desc.value;
    createMsg();
    closeModel();
}
const createMsg = () =>{
    msgBox.innerHTML += `<div><div class="msgs">
        <p class="msg">${msg.todo}</p>
        <span class="options">
            <ion-icon name="eye-outline" onclick='viewDesc(this)'></ion-icon>
            <ion-icon name="create-outline" onclick="editMsg(this)"></ion-icon>
            <ion-icon name="trash-outline" onclick="deleteMsg(this)"></ion-icon>
        </span>
    </div>
    <div class='desc-cont'><span class="desc-msg">&nbsp;&nbsp;${descMsg.todoDesc}</span><ion-icon name="close-outline" onclick="closeDesc(this)"></ion-icon></div></div>`
}



const editMsg = (e) => {
    openModel();
    inp.value=e.parentElement.previousElementSibling.innerHTML;
    desc.value=e.parentElement.parentElement.nextElementSibling.innerText;
    e.parentElement.parentElement.parentElement.remove()
}
const deleteMsg = (e) => {
    e.parentElement.parentElement.parentElement.remove()
}
const viewDesc=(e) =>{
    e.parentElement.parentElement.nextElementSibling.style.display='block';
} 
const closeDesc=(e) =>{
    e.parentElement.style.display='none';
}

let listContainer = document.getElementById("listContainer");
let addInp = document.querySelector(".addInp");
let addBtn = document.querySelector(".addBtn");

let list = [];

//Rendering List in listContainer
function renderList(arr){
    listContainer.innerHTML = "";
    arr.map(obj=>{
    let divEle = document.createElement("div");
    divEle.className = "list";
    //\divEle.classList.add("list")
    divEle.innerHTML = `
        <p>${obj.text}</p> 
    `
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    divEle.appendChild(deleteBtn);
    divEle.onclick = () =>{
        removeList(obj.id);
    }
    listContainer.append(divEle);
})
}
renderList(list);

//Add list by pressing key
addInp.addEventListener('keydown',function(e){
    if(e.key==="Enter"){
        e.preventDefault();
        addBtn.click();
    }
})

//Add button functionalities
function addList(event){

    if(addInp.value == ""){
        alert("Add Task First")
    }
    else{
        let obj = {
        id: Date.now(),
        text: addInp.value
    }
    list.push(obj);
    addInp.value = "";
    renderList(list);
    }
    
}

//Delete button functionality
function removeList(id){
    console.log(id);
    let filterList = list.filter(obj=>{
        return obj.id !== id;
    })
    list = filterList;
    
    renderList(list);
}

addBtn.addEventListener("click",addList);
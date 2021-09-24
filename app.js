const form = document.getElementById("form");
const input = document.getElementById("formInput");
const list = document.getElementById("list-group");
const deleteAll = document.getElementById("deleteAll");
const allList = document.getElementById("list");


// Event Listeners
form.addEventListener("submit",addItem);
allList.addEventListener("click",deleteItem);
deleteAll.addEventListener("click",deleteAllItem);


// Add Item
function addItem(e){

    const newItem = input.value;

    addItemToUI(newItem);

    e.preventDefault();
} 

function addItemToUI(newItem){
    const listItem = document.createElement("li");
    listItem.className = "list-group-item font-weight-bold d-flex justify-content-between";
    
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    listItem.appendChild(document.createTextNode(newItem));
    listItem.appendChild(link);
    list.appendChild(listItem);
}

// Delete Item
function deleteItem(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
    }
}

// Delete all item 
function deleteAllItem(e){
    while(list.firstElementChild != null){
        list.removeChild(list.firstElementChild);
    }
}
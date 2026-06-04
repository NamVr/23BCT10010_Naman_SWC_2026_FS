const itemInput=document.getElementById("itemInput");
const addBtn=document.getElementById("addBtn");
const searchInput=document.getElementById("searchInput");
const listContainer=document.getElementById("listContainer");
let items=[];
function renderItems(data){
    listContainer.innerHTML="";
    data.forEach((item)=>{
        const li=document.createElement("li");
        li.textContent=item;
        listContainer.appendChild(li);
    });
}
addBtn.addEventListener("click",()=>{
    const value=itemInput.value.trim();
    if(value===""){
        return;
    }
    items.push(value);
    renderItems(items);
    itemInput.value="";
});
searchInput.addEventListener("input",()=>{
        const searchText=searchInput.value.toLowerCase();
        const filteredItems=items.filter((item)=>
        item.toLowerCase().includes(searchText)
    );
    renderItems(filteredItems);
});

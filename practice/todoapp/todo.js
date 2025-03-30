const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("listcontainer")
const button=document.getElementById("btn")

button.addEventListener('click',()=>{
    if(inputbox.value === ''){
        alert("NOTHING TO ADD");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }  
      inputbox.value="";
      savedata();
})
inputbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click(); // Simulate button click when Enter is pressed
    }
});
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();
const reset=document.getElementById("resetapp")
reset.addEventListener('click',()=>{
   alert("resetting the app");  
  listcontainer.innerHTML="";
  localStorage.removeItem("data");
    window.location.reload();
})
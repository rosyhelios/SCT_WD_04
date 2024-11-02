const inputbox=document.getElementById("InputBox");
const listcontainer=document.getElementById("List-container");

function addtask(){
    if(inputbox.value===''){
      alert("you must write something");
    }else{
      let li=document.createElement("li");
      li.innerHTML=inputbox.value;
      listcontainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="x";
      li.appendChild(span);
    }
    inputbox.value='';
    saveData();
}

listcontainer.addEventListener("click",function (e){
  if(e.target.tagName=="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listcontainer.innerHTML);
}
function Showtask(){
  listcontainer.innerHTML=localStorage.getItem("data");
}
Showtask();

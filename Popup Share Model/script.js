const viewbtn=document.querySelector(".view-model")
const popup=document.querySelector(".popup")
const close=popup.querySelector(".close")

viewbtn.onclick= ()=>{
      popup.classList.toggle("show")
}
window.onload=()=>{

      setTimeout(function(){popup.classList.add("show")}, 3000);
      
}
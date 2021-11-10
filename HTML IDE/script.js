html=document.getElementById("Html");
js=document.getElementById("Js");
css=document.getElementById("Css");

htmlCode=""
JsCode=""
CssCode=""



output=document.getElementById("output")
html.addEventListener("keyup",(e)=>{
      htmlCode= e.target.value;
      showOuput()
})
css.addEventListener("keyup",(e)=>{
      CssCode= e.target.value;
      showOuput()

})
js.addEventListener("keyup",(e)=>{
      JsCode= e.target.value;
      showOuput()

})

function completeCode(){
      return `<style>${CssCode}</style><body>${htmlCode}</body><script>${JsCode}</script>`
}

function showOuput(){
      output.innerHTML=completeCode()
}
function openTab(event,name){
      var tabs=document.getElementsByClassName("code")
      for(var i=0;i<tabs.length;i++){
            tabs[i].style.display="none"
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tabs.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
      }
      event.currentTarget.className += " w3-red";

      document.getElementById(name).style.display="block"
}

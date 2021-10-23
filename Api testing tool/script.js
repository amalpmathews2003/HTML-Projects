
var input=document.getElementById('input').innerHTML
var output=document.getElementById("output")
var before,end;
let responceText,responceJson
async function getData(url){
      const responce=await fetch(url,{
            method : 'GET',
      });
      return responce
}
async function putData(url,data){
      const responce=await fetch(url,{
            method : 'POST',
            headers: {
                  'Content-Type': 'application/json',
                },
            body:JSON.stringify(data)
      });
      return responce
}
function Fetch(){
      var select=document.getElementById("methods")
      var method=select.value
      var url=document.getElementById("url").value
      before = Date.now();
      
      if(method=="GET")
      {
            getData(url)
            .then(responce=>{
                  responceJson=responce.json()
                  document.getElementsByClassName("result-status")[0].innerHTML=`Status : ${responce.status} ms`                 
                  end=Date.now()
                  return responceJson
            })
            .then((responceJson)=>{
                  Output(responceJson)
            })
      }
      else if(method=="POST")
      {
            let data=JSON.parse(document.getElementById("input").value)
            
            putData(url,data)
            .then(responce=>{
                  
                  responceJson=responce.json()
                  end=Date.now()
                  return responceJson

            })
            .then((responceJson)=>{
                  console.log(responceJson)
                  Output(responceJson)
            })

      }
      
}
function Output(responceJson) {
      responceText=syntaxHighlight( JSON.stringify(responceJson,null,4) )
      document.getElementById("output").innerHTML=""
      document.getElementById("output").appendChild(document.createElement('pre')).innerHTML = responceText;
      document.getElementsByClassName("result-time")[0].innerHTML=`Time : ${end-before} ms`
  }
function syntaxHighlight(json) {
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                  cls = 'key';
              } else {
                  cls = 'string';
              }
          } else if (/true|false/.test(match)) {
              cls = 'boolean';
          } else if (/null/.test(match)) {
              cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
      });
  }

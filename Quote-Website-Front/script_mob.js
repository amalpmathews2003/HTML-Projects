quotes=[
      {
        "quote":"Well Begun Is Half Done",
        "name":"Dan Mani Binu",
        "college":"NITC"
      },
      {
        "quote":"When the going gets tough, the tough get going",
        "name":"Aastha Mariam John",
        "college":"NITC"
      },
      {
        "quote":"When you get tired,learn to rest not to quit",
        "name":"Amal P Mathews",
        "college":"NIT Calicut"
      },
      {
        "quote":"If you get happy with where you right now, the urge to grow slowly disappears",
        "name":"Ben Thomas",
        "college":"NITC"
      }
    ]

var container=document.querySelector(".wrapper"),piecesNum=10;
colors=["note-wrap note-yellow","note-wrap note-blue","note-wrap note-pink","note-wrap note-green"]
maxCount=quotes.length
function ImageCollage(){
  for(var count=0;  count<piecesNum;count++){
    var box=document.createElement('aside')
    box.className=colors[count%4]
    var quote=document.createElement('p')
    quote.innerHTML=quotes[count%maxCount]["quote"]
    var name2=document.createElement('a')
   name2.innerHTML=quotes[count%maxCount]["name"]
   
   var college=document.createElement('div')
   college.classList="college"
   college.innerHTML=quotes[count%maxCount]["college"]
    box.appendChild(quote)
    box.appendChild(name2)
    box.append(college)
    container.appendChild(box)
}
}
ImageCollage()
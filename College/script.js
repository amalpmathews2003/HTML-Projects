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
var options = {
  container:document.querySelector(".collage_container"),
  piecesNum:30,
}

var count=0,maxCount=4
function ImageCollage(defaults)
{
  var container = document.querySelector(".collage_container");
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var containerStyle = container.currentStyle || window.getComputedStyle(container);
  var piecesNum = defaults.piecesNum;
  var levelIndex = Math.floor(piecesNum * 0.75);
  var maxsizeX = Math.round(container.offsetWidth/2);
  var maxsizeY = Math.round(container.offsetHeight/2);
  var offset = 15;
  var strength = 3;
  
  quote_boxes=[]
 
  for (var i=0; i < piecesNum; i++)
    {
      var piece = document.createElement('div');
      piece.className = "collage_piece";
      
     
      if(i < levelIndex){
        piece.classList += " level_1";     
        piece.dataset.level = 1;
        piece.style.width = getRandomInt(100,  300) + "px";
        piece.style.height = getRandomInt(40, 100) + "px";
        
      }else{
        piece.classList += " level_2";
        piece.dataset.level = 2;
        piece.style.width = getRandomInt(100,  400) + "px";
        piece.style.height = getRandomInt(40, 100) + "px";
      }
      container.appendChild(piece);
      
      piece.dataset.offset = getRandomInt(strength, strength*2*piece.dataset.level);
      piece.style.backgroundSize = ""+ containerWidth +"px "+ containerHeight +"px";
      piece.style.left = getRandomInt(0, containerWidth-piece.offsetWidth) + "px";
      piece.style.top = getRandomInt(0, containerHeight-piece.offsetHeight) + "px";
      piece.style.backgroundPosition = -(piece.offsetLeft) + "px " + (-piece.offsetTop) + "px";
      
      var quotebox=document.createElement("div")
      var quote=document.createElement("div")
      var quoteAuther=document.createElement("div")
      var quoteName=document.createElement("div")
      var quoteCollege=document.createElement("div")
      quotebox.className="quote-box"
   
      quote.className="quote"
      quoteAuther.className="quote-auther"
      quoteName.className="name"
      quoteCollege.className="college"
      if(i < levelIndex){
        quotebox.classList+=" level_1"
      }
      else{
        quotebox.classList+=" level_2"
      }
      quote.innerHTML=quotes[count%maxCount]["quote"]
      quoteName.innerHTML=quotes[count%maxCount]["name"]
      quoteCollege.innerHTML=quotes[count%maxCount]["college"]
      quoteAuther.appendChild(quoteName)
      addEvent(quotebox,quoteAuther)
      quotebox.appendChild(quote)
      quotebox.appendChild(quoteAuther)
      piece.appendChild(quotebox)
      quote_boxes.push(quotebox)
      count++
}
function addEvent (quotebox,quoteAuther) {
  quotebox.addEventListener("mouseover",()=>{
    for(var i=0;i<quote_boxes.length;i++){
      if(quote_boxes[i]!=quotebox)
        quote_boxes[i].classList.add("fade")
      else{
        quotebox.classList.add("hover")
        quoteAuther.appendChild(quoteCollege)
      }
    }
    
    
  })
  quotebox.addEventListener("mouseout",()=>{
    for(var i=0;i<quote_boxes.length;i++){
      if(quote_boxes[i]!=quotebox)
        quote_boxes[i].classList.remove("fade")
    }
    quotebox.classList.remove("hover")
    quoteAuther.removeChild(quoteCollege)
  })
}
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

ImageCollage(options);


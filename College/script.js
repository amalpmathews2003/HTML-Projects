// images=["images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg","images/21.jpg","images/22.jpg","images/23.jpg","images/24.jpg","images/25.jpg","images/26.jpg","images/27.jpg","images/28.jpg","images/29.jpg","images/30.jpg","images/31.jpg","images/32.jpg","images/33.jpg","images/34.jpg","images/35.jpg","images/36.jpg","images/37.jpg","images/38.jpg","images/39.jpg","images/40.jpg","images/41.jpg","images/42.jpg","images/43.jpg","images/44.jpg","images/45.jpg","images/46.jpg","images/47.jpg","images/48.jpg","images/49.jpg","images/50.jpg","images/51.jpg","images/52.jpg","images/53.jpg","images/54.jpg","images/55.jpg","images/56.jpg","images/57.jpg","images/58.jpg","images/59.jpg","images/60.jpg","images/61.jpg","images/62.jpg","images/63.jpg","images/64.jpg","images/65.jpg","images/66.jpg","images/67.jpg","images/68.jpg","images/69.jpg","images/70.jpg","images/71.jpg","images/72.jpg","images/73.jpg","images/74.jpg","images/75.jpg","images/76.jpg","images/77.jpg","images/78.jpg","images/79.jpg","images/80.jpg","images/81.jpg","images/82.jpg","images/83.jpg","images/84.jpg","images/85.jpg","images/86.jpg","images/87.jpg","images/88.jpg","images/89.jpg","images/90.jpg","images/91.jpg","images/92.jpg","images/93.jpg","images/94.jpg","images/95.jpg","images/96.jpg","images/97.jpg","images/98.jpg","images/99.jpg","images/100.jpg","images/101.jpg","images/102.jpg","images/103.jpg","images/104.jpg","images/105.jpg","images/106.jpg","images/107.jpg","images/108.jpg","images/109.jpg","images/110.jpg","images/111.jpg","images/112.jpg","images/113.jpg","images/114.jpg","images/115.jpg","images/116.jpg","images/117.jpg","images/118.jpg","images/119.jpg","images/120.jpg","images/121.jpg","images/122.jpg","images/123.jpg","images/124.jpg","images/125.jpg","images/126.jpg","images/127.jpg","images/128.jpg","images/129.jpg","images/130.jpg"]
// var options = {
//   container:document.querySelector(".collage_container"),
//   piecesNum:50,
//   imgSrc : images
// }

// var count=0,maxCount=131
// function ImageCollage(defaults)
// {
//   var container = defaults.container;
//   var containerWidth = container.offsetWidth;
//   var containerHeight = container.offsetHeight;
//   var containerStyle = container.currentStyle || window.getComputedStyle(container);
//   var piecesNum = defaults.piecesNum;
//   var levelIndex = Math.floor(piecesNum * 0.75);
//   var maxsizeX = Math.round(container.offsetWidth/2);
//   var maxsizeY = Math.round(container.offsetHeight/2);
//   var offset = 15;
//   var strength = 3;
  
  
//   for (var i=0; i < piecesNum; i++)
//     {
//       var piece = document.createElement('div');
//       piece.className = "collage_piece";
      
     
//       if(i < levelIndex){
//         piece.classList += " level_1";     
//         piece.dataset.level = 1;
//         piece.style.width = getRandomInt(100,  maxsizeX) + "px";
//         piece.style.height = getRandomInt(100, maxsizeY) + "px";
        
//       }else{
//         piece.classList += " level_2";
//         piece.dataset.level = 2;
//         piece.style.width = getRandomInt(40,  maxsizeX/2) + "px";
//         piece.style.height = getRandomInt(40, maxsizeY/2) + "px";
//       }
//      // console.log(defaults.imgSrc[count%maxCount])
//       piece.style.backgroundImage = "url("+defaults.imgSrc[count%piecesNum]+")";  
//       count++;    
//       container.appendChild(piece);
      
//       piece.dataset.offset = getRandomInt(strength, strength*2*piece.dataset.level);
//       piece.style.backgroundSize = ""+ containerWidth +"px "+ containerHeight +"px";
//       piece.style.left = getRandomInt(0, containerWidth-piece.offsetWidth) + "px";
//       piece.style.top = getRandomInt(0, containerHeight-piece.offsetHeight) + "px";
//       piece.style.backgroundPosition = -(piece.offsetLeft) + "px " + (-piece.offsetTop) + "px";
      
//       //console.log(containerStyle.marginLeft, containerStyle.marginTop);
//     }
  
// //   window.addEventListener("mousemove", function(e){
// //     var pieces = container.querySelectorAll(".collage_piece");
// //     var xpos, ypos, mouseX, mouseY, levelNum, off;
    
    
// //     if (!mie) {
// //         mouseX = e.pageX; 
// //         mouseY = e.pageY;
// //     }
// //     else {
// //         mouseX = event.clientX + document.body.scrollLeft;
// //         mouseY = event.clientY + document.body.scrollTop;
// //     }
    
// //     for (var p=0, l=pieces.length; p < l ; p++)
// //       {
// //         levelNum = pieces[p].dataset.level;
// //         off = pieces[p].dataset.offset;
// //         xpos = ( -mouseX/2 + containerWidth/2) / (off - levelNum);
// //         ypos = ( -mouseY/2 + containerHeight/2) / (off - levelNum);
// //         TweenMax.set(pieces[p],  {x:xpos, y:ypos});
// //       }
// //   })
  
  
//   var mie = (navigator.appName == "Microsoft Internet Explorer") ? true : false;  
//   function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// }

// ImageCollage(options);


images=["images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg","images/21.jpg","images/22.jpg","images/23.jpg","images/24.jpg","images/25.jpg","images/26.jpg","images/27.jpg","images/28.jpg","images/29.jpg","images/30.jpg","images/31.jpg","images/32.jpg","images/33.jpg","images/34.jpg","images/35.jpg","images/36.jpg","images/37.jpg","images/38.jpg","images/39.jpg","images/40.jpg","images/41.jpg","images/42.jpg","images/43.jpg","images/44.jpg","images/45.jpg","images/46.jpg","images/47.jpg","images/48.jpg","images/49.jpg","images/50.jpg","images/51.jpg","images/52.jpg","images/53.jpg","images/54.jpg","images/55.jpg","images/56.jpg","images/57.jpg","images/58.jpg","images/59.jpg","images/60.jpg","images/61.jpg","images/62.jpg","images/63.jpg","images/64.jpg","images/65.jpg","images/66.jpg","images/67.jpg","images/68.jpg","images/69.jpg","images/70.jpg","images/71.jpg","images/72.jpg","images/73.jpg","images/74.jpg","images/75.jpg","images/76.jpg","images/77.jpg","images/78.jpg","images/79.jpg","images/80.jpg","images/81.jpg","images/82.jpg","images/83.jpg","images/84.jpg","images/85.jpg","images/86.jpg","images/87.jpg","images/88.jpg","images/89.jpg","images/90.jpg","images/91.jpg","images/92.jpg","images/93.jpg","images/94.jpg","images/95.jpg","images/96.jpg","images/97.jpg","images/98.jpg","images/99.jpg","images/100.jpg","images/101.jpg","images/102.jpg","images/103.jpg","images/104.jpg","images/105.jpg","images/106.jpg","images/107.jpg","images/108.jpg","images/109.jpg","images/110.jpg","images/111.jpg","images/112.jpg","images/113.jpg","images/114.jpg","images/115.jpg","images/116.jpg","images/117.jpg","images/118.jpg","images/119.jpg","images/120.jpg","images/121.jpg","images/122.jpg","images/123.jpg","images/124.jpg","images/125.jpg","images/126.jpg","images/127.jpg","images/128.jpg","images/129.jpg","images/130.jpg"]
var options = {
  container:document.querySelector(".collage_container"),
  piecesNum:50,
  imgSrc : images
}

var count=0,maxCount=131
function ImageCollage(defaults)
{
  var container = defaults.container;
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var containerStyle = container.currentStyle || window.getComputedStyle(container);
  var piecesNum = defaults.piecesNum;
  var levelIndex = Math.floor(piecesNum * 0.75);
  var maxsizeX = Math.round(container.offsetWidth/2);
  var maxsizeY = Math.round(container.offsetHeight/2);
  var offset = 15;
  var strength = 3;
  
  
  for (var i=0; i < piecesNum; i++)
    {
      var piece = document.createElement('div');
      piece.className = "collage_piece";
      
     
      if(i < levelIndex){
        piece.classList += " level_1";     
        piece.dataset.level = 1;
        piece.style.width = getRandomInt(100,  maxsizeX) + "px";
        piece.style.height = getRandomInt(100, maxsizeY) + "px";
        
      }else{
        piece.classList += " level_2";
        piece.dataset.level = 2;
        piece.style.width = getRandomInt(40,  maxsizeX/2) + "px";
        piece.style.height = getRandomInt(40, maxsizeY/2) + "px";
      }
     // console.log(defaults.imgSrc[count%maxCount])
      piece.style.backgroundImage = "url("+defaults.imgSrc[count]+")";  
      count++;    
      container.appendChild(piece);
      
      piece.dataset.offset = getRandomInt(strength, strength*2*piece.dataset.level);
      piece.style.backgroundSize = ""+ containerWidth +"px "+ containerHeight +"px";
      piece.style.left = getRandomInt(0, containerWidth-piece.offsetWidth) + "px";
      piece.style.top = getRandomInt(0, containerHeight-piece.offsetHeight) + "px";
      piece.style.backgroundPosition = -(piece.offsetLeft) + "px " + (-piece.offsetTop) + "px";
      
      //console.log(containerStyle.marginLeft, containerStyle.marginTop);
    }
  
//   window.addEventListener("mousemove", function(e){
//     var pieces = container.querySelectorAll(".collage_piece");
//     var xpos, ypos, mouseX, mouseY, levelNum, off;
    
    
//     if (!mie) {
//         mouseX = e.pageX; 
//         mouseY = e.pageY;
//     }
//     else {
//         mouseX = event.clientX + document.body.scrollLeft;
//         mouseY = event.clientY + document.body.scrollTop;
//     }
    
//     for (var p=0, l=pieces.length; p < l ; p++)
//       {
//         levelNum = pieces[p].dataset.level;
//         off = pieces[p].dataset.offset;
//         xpos = ( -mouseX/2 + containerWidth/2) / (off - levelNum);
//         ypos = ( -mouseY/2 + containerHeight/2) / (off - levelNum);
//         TweenMax.set(pieces[p],  {x:xpos, y:ypos});
//       }
//   })
  
  
  var mie = (navigator.appName == "Microsoft Internet Explorer") ? true : false;  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

ImageCollage(options);


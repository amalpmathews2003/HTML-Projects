var prevActive;
let z=0;
let initialPos=[];

let isForcePause=false;


(function init ($) {
    var block = $("#rotator .small-circle").get(),
        increase = Math.PI * 2 / block.length,
        x = 0,
        y = 0,
        angle = 0;
    for (var i = 0; i < block.length; ) {

        var elem = block[i];
        
        x = 140 * Math.cos(angle) + 150;
        y = 140 * Math.sin(angle) + 150;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));
        angle += increase;

        initialPos.push({"left":x+"px","top":y+"px"})
        i++
    }
})(jQuery);





(function ($) {

var circs = document.querySelectorAll('#rotator, .small-circle');

for ( var i = 0; i < circs.length; i++ ) {
    circs[i].onclick = toggleAnimation; 
    circs[i].style.webkitAnimationPlayState = 'running';  
}

function toggleAnimation() {
    var style;
    for ( var i = 0; i < circs.length; i++ ) {
        style = circs[i].style;
        if ( style.webkitAnimationPlayState === 'running' ) {
            style.webkitAnimationPlayState = 'paused';
            document.body.className = 'paused';
        } else {
            style.webkitAnimationPlayState = 'running';
            document.body.className = '';       
        }
    }      
}
})(jQuery);


function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}


function onclickHandler(e,auto=false){
    if(!auto)
        var small=$(e.target)
    else
        var small=e
    small.removeClass('shake')
    id=small.attr("id")
    if(prevActive){
        // if(!id)
        //     id=prevActive.attr("id")

        prevActive.removeClass("active")
        prevActive.addClass('shake')

        prevActive.children("div").removeClass("details-active")
        prevActive.children("div").addClass("details")
        try{
            prevActive.css({"left":initialPos[id-1].left,"top":initialPos[id-1].top})

        }
        catch(e){
            console.log(e)
        }
         z++;

     }
     
     


    prevActive=small
    prevActivePosition=small.position() 
    
    angle=getRotationDegrees($("#rotator"))

    small.css({"left":"109px","top":"109px"})
    small.addClass("active")
    small.removeClass('shake')
    small.children("div").removeClass("details")
    small.children("div").addClass("details-active")
    small.children("div").css({"transform":`rotate(${360-angle}deg)`})

}

$(".small-circle").click(onclickHandler)


$(window).on("load",()=>{
    setInterval(()=>{
        if(!isForcePause)
         onclickHandler($('.small-circle').eq(Math.floor(Math.random()*(9))),true)
    },4000)
})


function forcePause(){
    if(isForcePause)
        isForcePause=false;
    else
        isForcePause=true

}


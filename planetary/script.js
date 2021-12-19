var prevActive
var prevActivePosition



(function ($) {
    var block = $("#rotator div").get(),
        increase = Math.PI * 2 / block.length,
        x = 0,
        y = 0,
        angle = 0;
    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = 140 * Math.cos(angle) + 150;
        y = 140 * Math.sin(angle) + 150;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));
        angle += increase;

    }
})(jQuery);

//Click to stop/start rotation

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

$(".small-circle").click((e)=>{
    var small=$(e.target).parent()

  //  var newPos=$("#addtothis").position()
    if(prevActive){
         prevActive.css({"left":prevActivePosition.left,"top":prevActivePosition.top})
        $("rotater").append(prevActive)
     }
     
     

    prevActive=small
    prevActivePosition=small.position() 

    small.css({"left":"145px","top":"145px"})
    // small.detach()
    // small.addClass("active")



})

var map;
function myMap() {
      var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
      };
      map= new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

setTimeout(function() { 
      alert("My location");
      Mylocation();
 }, 5000);

 function Mylocation(){
       if(navigator.geolocation){
             navigator.geolocation.getCurrentPosition(setPosition);
       }
 }
 function setPosition(position){
      marker = new google.maps.Marker({position: new google.maps.LatLng(position.coords.latitude,position.coords.longitude)});
      marker.setMap(map);
      map.panTo( new google.maps.LatLng( position.coords.latitude,position.coords.longitude ) );
      map.setZoom(15);
      google.maps.event.addListener(marker,'click',function() {
            var pos = map.getZoom();
            map.setZoom(18);
            map.setCenter(marker.getPosition());
            });
}


var map;function initMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:17,center:new google.maps.LatLng(59.938931,30.323089),mapTypeId:"roadmap"});new google.maps.Marker({position:new google.maps.LatLng(59.938931,30.323089),icon:"img/map-pin-small.png",map:map})}function changeIcon(){window.innerWidth>=768&&(marker.icon="img/map-pin.png",window.innerWidth>=1300&&(map.center=new google.maps.LatLng(59.939014,30.319356)))}window.addEventListener("resize",changeIcon,!1);
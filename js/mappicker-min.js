function isMobileDevice(){void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")?mapResize():console.log("phone")}window.addEventListener("resize",isMobileDevice,!1);var map,marker,myLatlng={center:{lat:59.938931,lng:30.323089},right:{lat:59.939014,lng:30.319356}};function initMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:17,center:myLatlng.center,mapTypeId:"roadmap"}),marker=new google.maps.Marker({position:myLatlng.center,icon:"img/map-pin-small.png",map:map}),isMobileDevice()}function mapResize(){window.innerWidth>=1300?map.panTo(myLatlng.right):map.panTo(myLatlng.center),marker.icon="img/map-pin.png"}
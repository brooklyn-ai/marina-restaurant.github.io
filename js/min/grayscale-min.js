function init(){var e={zoom:15,center:new google.maps.LatLng(42.867795,-72.558137),disableDefaultUI:!0,scrollwheel:!1,draggable:!1,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#38DDEA"},{visibility:"on"}]}]},l=document.getElementById("map"),a=new google.maps.Map(l,e),t="images/dragonblack-map.png",o=new google.maps.LatLng(42.867795,-72.558137),i=new google.maps.Marker({position:o,map:a,icon:t})}$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$("a.page-scroll").bind("click",function(e){var l=$(this);$("html, body").stop().animate({scrollTop:$(l.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),google.maps.event.addDomListener(window,"load",init);
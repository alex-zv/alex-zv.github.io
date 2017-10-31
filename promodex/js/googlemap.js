var center = new google.maps.LatLng(48.858391, 2.294460);

var image = new google.maps.MarkerImage(
    'img/map_marker.png',
    new google.maps.Size(25,40),
    new google.maps.Point(0,0),
    new google.maps.Point(12,20)
  );

google.maps.event.addDomListener(window, 'load', initialize);

// new map

function initialize() {
    var latlng = new google.maps.LatLng(56.323678, 44.0);
    var myOptions = {
      zoom: 17,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);
		
		setMarkers(map, placesC);
    }
  
  	var placesC = [
            ['Эйфелева башня', 48.858391, 2.294460],
    ];  
 
    function setMarkers(map, locations) {

         for (var i = 0; i < placesC.length; i++) {
            var myLatLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon:image,
                title: locations[i][0],
            }); 
         }
    };
    
    // function initialize2() {
    // var latlng = new google.maps.LatLng(56.323678, 44.0);
    // var myOptions = {
    //   zoom: 17,
    //   center: center,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP,
    //   scrollwheel: false,
    // };
    // var map = new google.maps.Map(document.getElementById("map-canvas"),
    //     myOptions);
    
    // setMarkers(map, placesC);
    // }
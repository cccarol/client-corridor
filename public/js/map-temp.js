google.maps.event.addDomListener(window, 'load', initialize);

var map;
var infowindow  = new google.maps.InfoWindow();
var logo    	= "/wp-content/themes/redpeak/images/icon-map-marker-logo.png";
var icon1   	= "/wp-content/themes/redpeak/images/icon-map-marker.png";
var icon2   	= "/wp-content/themes/redpeak/images/icon-map-marker.png";
var icon3   	= "/wp-content/themes/redpeak/images/icon-map-marker.png";
var icon4   	= "/wp-content/themes/redpeak/images/icon-map-marker.png";
var icon5   	= "/wp-content/themes/redpeak/images/icon-map-marker.png";
var locations 	= [
				  [39.739567,-104.984418],
				  [39.738567,-104.985718],
				  [39.732867,-104.988518],
				  [39.733567,-104.982318],
				  [39.734667,-104.981618]
				  ];
var locationInfo = '<div class="info_window"><img src="/wp-content/themes/redpeak/images/location-ph.jpg" /><h4>THE SEASONS OF CHERRY CREEK</h4><p>3498 East Ellsworth Avenue <br>Denver CO 80209<br>(855) 716-4535<br><a href="#">View More Details  ></a></p></div>';
var style = [
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      { "color": "#cc652f" },
      { "weight": 5.6 },
      { "hue": "#6e00ff" }
    ]
  }
][
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      { "color": "#cc652f" },
      { "weight": 5.6 },
      { "hue": "#6e00ff" }
    ]
  }
][
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      { "color": "#cc652f" },
      { "weight": 5.6 },
      { "hue": "#6e00ff" }
    ]
  }
][
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#b4252d" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#a0adbf" },
      { "visibility": "on" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#bbadbf" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "color": "#d0d3bf" }
    ]
  },{
  }
]

[
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#b4252d" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
  }
];



function initialize() {
	
	var point = new google.maps.LatLng(39.737567,-104.984718);
	
	var myOptions = {
		center: point,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false,
		streetViewControl: true,
  		zoomControl: true,
  		scaleControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var logo_marker = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: point,
		icon: logo
	});
	
	var pin1 = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(locations[0][0], locations[0][1]),
		icon: icon1
	});	
	
	var pin2 = new google.maps.Marker({
		map:map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(locations[1][0], locations[1][1]),
		icon: icon2
	});	
	
	var pin3 = new google.maps.Marker({
		map:map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(locations[2][0], locations[2][1]),
		icon: icon3
	});	
	
	var pin4 = new google.maps.Marker({
		map:map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(locations[3][0], locations[3][1]),
		icon: icon4
	});	
	
	var pin5 = new google.maps.Marker({
		map:map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(locations[4][0], locations[4][1]),
		icon: icon5
	});	
	
	
	google.maps.event.addListener(logo_marker, 'click', function() {
		infowindow.setContent(locationInfo);
		infowindow.open(map, logo_marker);
	});
	
	map = new google.maps.Map(document.getElementById("area_map"), myOptions);
	map.setOptions({styles: style});
	logo_marker.setMap(map);
	pin1.setMap(map);
	pin2.setMap(map);
	pin3.setMap(map);
	pin4.setMap(map);
	pin5.setMap(map);
	
}

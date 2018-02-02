function initialize() {
  var mapCanvas = document.getElementById('map');
  var myLatLng = {lat: 45.530073, lng: 13.651940};
  var mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);






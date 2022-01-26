import React, { useEffect } from "react";
var latlng;

const GeoBtn = (props) => {
  const findme = (props) => {
    navigator.geolocation.getCurrentPosition(geolocationCallback);
    function geolocationCallback(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      console.log(lat, lng);
      let apiUrl =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        lat +
        "," +
        lng +
        "&amp;key=AIzaSyAa3ygrsdE4gaNXDyTorebUYlY16-Wn2J4";

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <button onClick={findme}> push me </button>
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAa3ygrsdE4gaNXDyTorebUYlY16-Wn2J4&callback=initMap"
      ></script>
    </div>
  );
};
export default GeoBtn;

// function initMap(latlng) {
//   const map = new google.maps.Map();
//   const geocoder = new google.maps.Geocoder();
//   const infowindow = new google.maps.InfoWindow();

//   geocodeLatLng(geocoder, map, infowindow, latlng);
// }

// function geocodeLatLng(geocoder, map, infowindow ,latlng) {
//   geocoder
//   .geocode({ location: latlng })
//   .then((response) => {
//     if (response.results[0]) {
//       map.setZoom(11);

//       const marker = new google.maps.Marker({
//         position: latlng,
//         map: map,
//         });
//         console.log(response.results[0].address_components[5].short_name + '-' + response.results[0].address_components[4].short_name);
//          infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     })
//   };
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXJrWfurjzZRZi7SFcW88HCPEBut2PyLA&callback=initMap&v=weekly"></script>

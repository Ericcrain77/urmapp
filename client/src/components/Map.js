import React, { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import usaHigh from "@amcharts/amcharts5-geodata/json/usaHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


var selectedStates = [
  "US-TN"
];

function Map(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("mapdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          projection: am5map.geoAlbersUsa()
        })
        );
    
      
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
         geoJSON: usaHigh,
         fill: am5.color(0x5bc8af),
         stroke: am5.color(0x000000)
      })
    )

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
    });
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xff6b6b)
    });
    
    for (let i = 0; i < selectedStates.length; i++) {
    polygonSeries.mapPolygons.template.adapters.add
    ('fill', function(fill, target) {
      if (target.dataItem.get("id") === selectedStates[i]) {
        return am5.color(0xff6b6b)
      }
      else{
        return fill;
      }
    })
    };
 
    root.current = root;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    
      <div id="mapdiv" style={{ width: "100%", height: "500px" }}></div>
  
  );
}
        

    // function initMap(latlng) {
    //   const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 8,
    //     center: { lat: 40.731, lng: -73.997 },
    //   });
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
      
      // const findme = (props) => {
      //   navigator.geolocation.getCurrentPosition(geolocationCallback);  
      //   function geolocationCallback(position){
      //     let lat = position.coords.latitude;
      //     let lng = position.coords.longitude;
      //     latlngStr = lat + ',' + lng;
      //     latlng = {lat, lng}
      //     console.log(latlngStr);
      //     initMap(latlng);
      //   }
      // }

//     var root = am5.Root.new("mapdiv");
    
//     root.setThemes([
//       am5themes_Animated.new(root)
//     ]);

//     var chart = root.container.children.push(
//         am5map.MapChart.new(root, {
//           projection: am5map.geoAlbersUsa()
//         })
//         );
    
      
//     let polygonSeries = chart.series.push(
//       am5map.MapPolygonSeries.new(root, {
//          geoJSON: usaHigh,
//          fill: am5.color(0x5bc8af),
//          stroke: am5.color(0x000000)
//       })
//     )

//     polygonSeries.mapPolygons.template.setAll({
//       tooltipText: "{name}",
//       interactive: true,
//     });
//     polygonSeries.mapPolygons.template.states.create("hover", {
//       fill: am5.color(0xff6b6b)
//     });
    
//     for (let i = 0; i < selectedStates.length; i++) {
//     polygonSeries.mapPolygons.template.adapters.add
//     ('fill', function(fill, target) {
//       if (target.dataItem.get("id") === selectedStates[i]) {
//         return am5.color(0xff6b6b)
//       }
//       else{
//         return fill;
//       }
//     })
//     };

//     this.root = root;
//   }

//   componentWillUnmount() {
//     if (this.root) {
//       this.root.dispose();
//     }
//   }
  

//   render() {
//     return (
//       <div>

//       <div id="mapdiv"></div>
        
//       </div>
//     );
//   }
// }
// }  
// //<button onClick={findme}></button>
export default Map;
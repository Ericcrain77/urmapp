
import React from "react";




const GeoBtn = () => {
    
    const findme = () => {
        
        navigator.geolocation.getCurrentPosition(geolocationCallback);  
            function geolocationCallback(position){
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                console.log(lat, lng);
                let apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + lng + "&key=AIzaSyAXJrWfurjzZRZi7SFcW88HCPEBut2PyLA"
                fetch(apiUrl)
                .then(response => response.json())
                .then(data => console.log(data));
    
            }
        }
                return (
                    <div>
                        <button onClick={findme}> Add Your Location </button>
                    </div>
                );
    
            
    
}
export default GeoBtn



 
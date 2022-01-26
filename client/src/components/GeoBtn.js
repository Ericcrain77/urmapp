import React from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ADD_STATE } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

const GeoBtn = (userData) => {
    
    const loggedIn = Auth.loggedIn();
    const [addState, { error }] = useMutation(ADD_STATE);
    const selectedStates = userData.userData.me.states;
    console.log(userData.userData.me.states);
    
    const findme = () => { 
    navigator.geolocation.getCurrentPosition(geolocationCallback);  
    
    function geolocationCallback(position){
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.log(lat, lng);
        let apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + lng + "&key=AIzaSyAXJrWfurjzZRZi7SFcW88HCPEBut2PyLA"
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {console.log(data);
            console.log(data.results[0].address_components[5].short_name + '-' + data.results[0].address_components[4].short_name);
        }) 
        
    }
    
}
    try {
        const { data } = addState({
            variables: { state: data.results[0].address_components[5].short_name + '-' + data.results[0].address_components[4].short_name },
                    });
                    window.location.reload();
                  } catch (e) {
                    console.error(e);
                  }
                
                return (
                    <div>
                        <button onClick={findme} className="signup-btn"> Add Your Location </button>
                    </div>
                );
       
}
export default GeoBtn



 

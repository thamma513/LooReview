import React, { Component } from 'react'; 
import { Marker } from 'google-maps-react';

 class MapArray extends Component{

    // static defaultProps = {
    

    //         markers: []
    //     }
  
    render(){
        const MarkerPins = this.props.markers.map(location => {
            // console.log(location);
            
            return (
                <Marker
                    title={location.name}
                    name={location.name}
                    position={{lat: location.location.lat, lng: location.location.lng}}
                />
            )
        });
        console.log(MarkerPins);
        return (
            <ul>
            {MarkerPins}
            </ul>
        )

    }

}

export default MapArray;
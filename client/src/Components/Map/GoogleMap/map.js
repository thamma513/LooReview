import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import key from '../../../keys';
// import WithMarkers from  '../../ClickableMarker/clickmarker'
import MapArray from '../../array';

export class MapContainer extends Component {
    state = {
        selectedPlace: {
            name: "Denver, CO",
            // name: "Broomfield, CO"
        }
    }

    onMarkerClick() {
        alert("clicked");
    }

    render() {
        return (
            <Map 
<<<<<<< HEAD
            google={this.props.google} 
            zoom={14} 
            initialCenter={{
                lat: 39.7392,
                lng: -104.9903
            }}>

            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
=======
                google={this.props.google} 
                zoom={14} 
                initialCenter={{
                    lat: 39.7392,
                    lng: -104.9903
                }}>
                
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
>>>>>>> 57b718fa803fe2a4361fa63ead73ba56f7d1ad23

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: key.GOOGLE
})(MapContainer);
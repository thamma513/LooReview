import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import key from '../../../keys';
// import WithMarkers from  '../../ClickableMarker/clickmarker'

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
            className="map"
            google={this.props.google}
            onClick={this.onMapClicked}
            style={{ height: '100%', position: 'relative', width: '100%' }}
            zoom={14}>
            <Marker
              name="SOMA"
              onClick={this.onMarkerClick}
              position={{ lat: 37.778519, lng: -122.40564 }}
            />
    
            <Marker
              name="Dolores park"
              onClick={this.onMarkerClick}
              position={{ lat: 37.759703, lng: -122.428093 }}
            />

            <Marker className="array"             />
    
            <Marker name="Current location" onClick={this.onMarkerClick} />
    
            <InfoWindow
              marker={this.state.activeMarker}
              onClose={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
    
            <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
              <small>
                Click on any of the markers to display an additional info.
              </small>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: key.GOOGLE
})(MapContainer);
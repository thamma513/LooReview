import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import key from '../../../keys';
import MapArray from '../../Maploop/array';

export class MapContainer extends Component {
    state = {
        selectedPlace: {
            name: "Denver, CO",
            // name: "Broomfield, CO"
        },

    }

    onMarkerClick() {
        alert("clicked");
    }

    render() {
        return (
            <Map google={this.props.google}
            style={{width: '75%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={14}>

          
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: key.GOOGLE
})(MapContainer);
import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  DirectionsRenderer,
  Marker,
} from 'react-google-maps';
import Geocode from 'react-geocode';
import { MapApiKey } from '../../keys';
import Sidebar from '../Sidebar/Sidebar';

Geocode.setApiKey(MapApiKey);
Geocode.enableDebug();

class Map extends React.Component {
  state = {
    zoom: 18,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    starting: {
      lat: 0,
      lng: 0,
    },
    ending: null,
    directionsObj: null,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          mapPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          starting: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser!');
    }
  }

  startNav = (
    origin = this.state.starting,
    destination = this.state.ending
  ) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directionsObj: result,
          });
        } else {
          console.log('error');
        }
      }
    );
  };

  onMarkerDragEndDest = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        this.setState({
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
          ending: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onMarkerDragEndStart = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        this.setState({
          starting: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onPlaceSelectedStart = (place) => {
    const latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
      starting: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  onPlaceSelectedEnd = (place) => {
    const latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
      ending: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={this.state.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
          onClick={(obj) => {
            this.setState({
              ending: {
                lat: obj.latLng.lat(),
                lng: obj.latLng.lng(),
              },
              mapPosition: {
                lat: obj.latLng.lat(),
                lng: obj.latLng.lng(),
              },
            });
          }}
        >
          <Marker
            google={this.props.google}
            draggable={true}
            onDragEnd={this.onMarkerDragEndStart}
            position={{
              lat: this.state.starting.lat,
              lng: this.state.starting.lng,
            }}
          />
          <Marker
            google={this.props.google}
            draggable={true}
            onDragEnd={this.onMarkerDragEndDest}
            position={{
              lat: this.state.ending?.lat || 0,
              lng: this.state.ending?.lng || 0,
            }}
            opacity={this.state.ending ? 1 : 0}
          />
          <DirectionsRenderer
            directions={this.state.directionsObj}
            options={{ preserveViewport: true }}
          />
        </GoogleMap>
      ))
    );

    return (
      <div>
        <Sidebar
          onPlaceSelectedStart={this.onPlaceSelectedStart}
          onPlaceSelectedEnd={this.onPlaceSelectedEnd}
          startNav={this.startNav}
          starting={this.state.starting}
          ending={this.state.ending}
        />
        <div style={{ height: '100vh', width: '100vw', zIndex: '0' }}>
          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    );
  }
}

export default Map;
